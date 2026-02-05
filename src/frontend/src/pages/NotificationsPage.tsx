import { Bell, Package, Tag, Info } from 'lucide-react';

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      icon: Package,
      title: 'New Products Available',
      message: 'Check out our latest additions to the thepla collection',
      time: '2 hours ago',
    },
    {
      id: 2,
      icon: Tag,
      title: 'Special Offer',
      message: 'Get 10% off on orders above ₹500',
      time: '1 day ago',
    },
    {
      id: 3,
      icon: Info,
      title: 'Delivery Update',
      message: 'We now deliver to more locations across Mumbai',
      time: '3 days ago',
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Notifications</h1>

          <div className="space-y-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className="bg-card rounded-lg border border-border p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {notifications.length === 0 && (
            <div className="text-center py-12">
              <Bell className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                No notifications yet
              </h2>
              <p className="text-muted-foreground">
                We'll notify you when there's something new
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
