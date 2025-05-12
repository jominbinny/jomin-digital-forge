
import React, { useState } from 'react';
import { Mail, Phone, GitHub, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-darkBg">
      <div className="section-container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="text-center text-mediumText mb-12 max-w-2xl mx-auto">
          Feel free to contact me for any project inquiries or just to say hello!
        </p>
        
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <a href="mailto:jominbinny21@gmail.com" className="flex items-start hover:text-neon transition-colors">
                  <Mail className="mt-1 mr-4 text-neon" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-mediumText">jominbinny21@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+918156831156" className="flex items-start hover:text-neon transition-colors">
                  <Phone className="mt-1 mr-4 text-neon" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-mediumText">+91 8156831156</p>
                  </div>
                </a>
                
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-4 text-neon" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-mediumText">Ernakulam, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/jominbinny" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-muted w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                >
                  <GitHub size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/jominbinny" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-muted w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-secondary rounded-xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-muted border-muted"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted border-muted"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-muted border-muted"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-muted border-muted min-h-32"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="button-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
