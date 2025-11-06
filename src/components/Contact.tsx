"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate(); // ✅ for navigation

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_opbjzfo", // your EmailJS service ID
        "template_ausepep", // your template ID
        formRef.current,
        "0XOe85dPHYF8PG-5r" // your public key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error("Email error:", error);
          setLoading(false);
        }
      );
  };

  // ⏱ Auto-hide success message after 5 seconds
  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  return (
  
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <Navigation />
        {/* Header */}
        <div className="text-center mb-16">
          <div className="h-px w-24 bg-gradient-primary mx-auto mb-8 glow-primary" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">GET IN</span> TOUCH
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next groundbreaking project? Let's build the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="w-6 h-6 text-primary" />,
                title: "Email",
                text: "louiscolix@gmail.com",
              },
              {
                icon: <Phone className="w-6 h-6 text-primary" />,
                title: "Phone",
                text: "+234 905 410 1290",
              },
              {
                icon: <MapPin className="w-6 h-6 text-primary" />,
                title: "Location",
                text: "Lagos, Nigeria",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="sci-fi-card p-6 text-center hover-glow transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="sci-fi-card relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary font-mono">
                  &gt; SEND_MESSAGE();
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputGroup label="Name">
                      <Input
                        name="from_name"
                        placeholder="Your name"
                        className="bg-muted border-border focus:border-primary hover-glow"
                        required
                      />
                    </InputGroup>
                    <InputGroup label="Email">
                      <Input
                        type="email"
                        name="from_email"
                        placeholder="your.email@example.com"
                        className="bg-muted border-border focus:border-primary hover-glow"
                        required
                      />
                    </InputGroup>
                  </div>

                  <InputGroup label="Subject">
                    <Input
                      name="subject"
                      placeholder="Project collaboration"
                      className="bg-muted border-border focus:border-primary hover-glow"
                      required
                    />
                  </InputGroup>

                  <InputGroup label="Message">
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-muted border-border focus:border-primary hover-glow resize-none"
                      required
                    />
                  </InputGroup>

                  <Button
                    size="lg"
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-primary hover:bg-primary-glow text-primary-foreground hover-glow flex items-center justify-center gap-2 py-3 text-lg font-semibold transition-all duration-300 ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <Send className="w-5 h-5 animate-pulse" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Launch Message
                      </>
                    )}
                  </Button>

                  {sent && (
                    <div className="flex items-center justify-center mt-6 space-x-2 animate-fade-in">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                      <p className="text-green-500 font-semibold">
                        Message sent successfully!
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for cleaner input structure
const InputGroup = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div>
    <label className="text-sm font-medium text-muted-foreground mb-2 block">
      {label}
    </label>
    {children}
  </div>
);

export default Contact;