import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LINKS, BUSINESS_HOURS, SITE_INFO } from '@/data/links';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact & Location — {SITE_INFO.name} | Visit Us in Surat</title>
        <meta
          name="description"
          content="Find Blue Can Coffee in Uttran, Surat. Get directions, contact us, or order online via Zomato and Swiggy. Open daily 8 AM - 11:30 PM."
        />
        <link rel="canonical" href="https://bluecancoffee.com/contact" />
      </Helmet>

      <Layout>
        <section className="py-12 md:py-16" aria-labelledby="contact-title">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <h1
                id="contact-title"
                className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
              >
                Get in Touch
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We'd love to see you! Drop by for a coffee or reach out if you have any questions.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              {/* Address */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground mb-1">Address</h2>
                    <p className="text-muted-foreground">{LINKS.address}</p>
                    <a
                      href={LINKS.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline mt-2 text-sm"
                    >
                      Get directions
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground mb-1">Opening Hours</h2>
                    <p className="text-muted-foreground">{BUSINESS_HOURS.display}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Open all days of the week
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground mb-1">Phone</h2>
                    <a href={`tel:${LINKS.phone}`} className="text-primary hover:underline">
                      {LINKS.phone}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tap to call on mobile
                    </p>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground mb-1">Follow Us</h2>
                    <a
                      href={LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @bluecancoffee_india
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      For updates and behind-the-scenes
                    </p>
                  </div>
                </div>
              </div>

              {/* Order CTA */}
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <h2 className="font-heading text-xl font-semibold mb-2">
                  Order from Home
                </h2>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Can't make it in? Get our coffee delivered to your doorstep.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Button asChild variant="secondary">
                    <a href={LINKS.zomato} target="_blank" rel="noopener noreferrer">
                      Zomato
                    </a>
                  </Button>
                  <Button asChild variant="secondary">
                    <a href={LINKS.swiggy} target="_blank" rel="noopener noreferrer">
                      Swiggy
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
