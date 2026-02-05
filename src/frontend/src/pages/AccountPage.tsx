import { User, Settings, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function AccountPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Account</h1>

          <div className="bg-card rounded-lg border border-border p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Guest User</h2>
                <p className="text-sm text-muted-foreground">Welcome to our store</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              to="/contact"
              className="flex items-center gap-4 bg-card rounded-lg border border-border p-4 hover:shadow-md transition-shadow"
            >
              <Phone className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Contact Us</h3>
                <p className="text-sm text-muted-foreground">Get in touch with our team</p>
              </div>
            </Link>

            <Link
              to="/faq"
              className="flex items-center gap-4 bg-card rounded-lg border border-border p-4 hover:shadow-md transition-shadow"
            >
              <Settings className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">FAQ</h3>
                <p className="text-sm text-muted-foreground">Frequently asked questions</p>
              </div>
            </Link>

            <div className="flex items-center gap-4 bg-card rounded-lg border border-border p-4">
              <Heart className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Saved Items</h3>
                <p className="text-sm text-muted-foreground">Coming soon</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card rounded-lg border border-border p-4">
              <MapPin className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Delivery Addresses</h3>
                <p className="text-sm text-muted-foreground">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
