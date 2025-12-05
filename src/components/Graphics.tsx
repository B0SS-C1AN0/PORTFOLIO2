import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

interface GraphicsProps {
  variant?: "particles" | "waves" | "orbs" | "combined";
}

const Graphics = ({ variant = "combined" }: GraphicsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Particle[] = [];
    const waves: number[] = [];
    const orbs: { x: number; y: number; vx: number; vy: number; r: number }[] =
      [];

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: Math.random() * 100 + 50,
        maxLife: Math.random() * 100 + 50,
        size: Math.random() * 3 + 1,
      });
    }

    // Initialize waves
    for (let i = 0; i < canvas.width; i++) {
      waves.push(0);
    }

    // Initialize orbs
    for (let i = 0; i < 3; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        r: Math.random() * 30 + 20,
      });
    }

    let animationId: number;
    let frameCount = 0;

    const animate = () => {
      frameCount++;

      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid background
      if (variant === "combined" || variant === "waves") {
        ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";
        ctx.lineWidth = 1;
        for (let i = 0; i < canvas.width; i += 40) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        for (let i = 0; i < canvas.height; i += 40) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
      }

      // Animate and draw particles
      if (variant === "particles" || variant === "combined") {
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life--;

          // Wrap around edges
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          // Restart particle if dead
          if (p.life <= 0) {
            p.x = Math.random() * canvas.width;
            p.y = Math.random() * canvas.height;
            p.life = p.maxLife;
          }

          // Draw particle
          const opacity = (p.life / p.maxLife) * 0.7;
          ctx.fillStyle = `rgba(0, 255, 136, ${opacity})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Draw particle trails
          ctx.strokeStyle = `rgba(0, 255, 136, ${opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 5, p.y - p.vy * 5);
          ctx.stroke();
        }
      }

      // Animate and draw waves
      if (variant === "waves" || variant === "combined") {
        // Update wave
        for (let i = 0; i < waves.length; i++) {
          waves[i] = Math.sin(frameCount * 0.02 + i * 0.02) * 30;
        }

        // Draw waves
        ctx.strokeStyle = "rgba(255, 0, 255, 0.6)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2 + waves[0]);

        for (let i = 1; i < waves.length; i++) {
          ctx.lineTo(i, canvas.height / 2 + waves[i]);
        }
        ctx.stroke();

        // Draw wave fill
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fillStyle = "rgba(255, 0, 255, 0.1)";
        ctx.fill();
      }

      // Animate and draw orbs
      if (variant === "orbs" || variant === "combined") {
        orbs.forEach((orb, idx) => {
          // Update position
          orb.x += orb.vx;
          orb.y += orb.vy;

          // Bounce off edges
          if (orb.x - orb.r < 0 || orb.x + orb.r > canvas.width) {
            orb.vx *= -1;
            orb.x = Math.max(orb.r, Math.min(canvas.width - orb.r, orb.x));
          }
          if (orb.y - orb.r < 0 || orb.y + orb.r > canvas.height) {
            orb.vy *= -1;
            orb.y = Math.max(orb.r, Math.min(canvas.height - orb.r, orb.y));
          }

          // Draw orb glow
          const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
          const colors = ["#00ffff", "#ff00ff", "#ffff00"];
          const color = colors[idx % colors.length];

          gradient.addColorStop(0, color + "40");
          gradient.addColorStop(0.7, color + "20");
          gradient.addColorStop(1, color + "00");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
          ctx.fill();

          // Draw orb border
          ctx.strokeStyle = color + "cc";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
          ctx.stroke();
        });
      }

      // Draw connecting lines between particles
      if (variant === "particles" || variant === "combined") {
        ctx.strokeStyle = "rgba(0, 255, 136, 0.1)";
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [variant]);

  return (
    <div className="w-full h-96 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg overflow-hidden border border-primary/20 relative shadow-lg">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ display: "block" }}
      />
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none" />
    </div>
  );
};

export default Graphics;
