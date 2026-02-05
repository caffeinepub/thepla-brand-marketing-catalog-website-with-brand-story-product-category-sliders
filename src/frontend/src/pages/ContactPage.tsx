import { Phone, MapPin, Mail, Instagram } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { useState } from 'react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground mb-8">
            Get in touch with us for orders, inquiries, or feedback
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:9785674345"
                    className="text-primary hover:underline text-lg"
                  >
                    9785674345
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Call us for orders and inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-lg text-foreground">Mulund East</p>
                  <p className="text-sm text-muted-foreground mt-1">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Add your email for updates and inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <SiInstagram className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                  <input
                    type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="@yourbrand"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Follow us on Instagram for updates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-8 bg-accent/5 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-3">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Saturday</span>
                <span className="text-foreground font-medium">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-foreground font-medium">10:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
