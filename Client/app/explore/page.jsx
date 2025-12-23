"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const exploreItems = [
  {
    id: 1,
    name: "Lake Hora",
    category: "Natural Wonder",
    description: "Famous volcanic crater lake in Bishoftu.",
    details:
      "One of Bishoftu’s most popular lakes, surrounded by resorts and walking areas. Ideal for relaxation and sunset views.",
    image: "/lake-hora-bishoftu.jpg",
    location: "Bishoftu",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Lake+Hora+Bishoftu",
  },
  {
    id: 2,
    name: "Lake Babogaya",
    category: "Natural Wonder",
    description: "Beautiful crater lake surrounded by resorts and lodges.",
    details:
      "Known for peaceful surroundings, birdlife, and lakeside resorts. A favorite weekend destination.",
    image: "/lake-babogaya-bishoftu.jpg",
    location: "Bishoftu",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Lake+Babogaya+Bishoftu",
  },
  {
    id: 3,
    name: "Lake Bishoftu (Debre Zeit Lake)",
    category: "Natural Wonder",
    description: "Historic crater lake near the town center.",
    details:
      "A culturally significant lake with scenic walking paths and viewpoints.",
    image: "/lake-bishoftu.jpg",
    location: "Central Bishoftu",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Lake+Bishoftu+Debre+Zeit",
  },
  {
    id: 4,
    name: "Bishoftu Hot Springs Spa",
    category: "Natural Wonder",
    description: "Natural geothermal springs for relaxation and wellness.",
    details:
      "Mineral-rich hot springs popular for therapeutic bathing and spa treatments.",
    image: "/bishoftu-hot-springs.jpg",
    location: "Bishoftu",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bishoftu+Hot+Springs",
  },
  {
    id: 5,
    name: "Lake Kuriftu",
    category: "Natural Wonder",
    description: "Scenic crater lake surrounded by luxury resorts.",
    details:
      "A calm and beautiful lake especially around Kuriftu Resort, perfect for lakeside walks.",
    image: "/lake-kuriftu-bishoftu.jpg",
    location: "Bishoftu",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Lake+Kuriftu+Bishoftu",
  },
  {
    id: 6,
    name: "Lake Chelekleka",
    category: "Natural Wonder",
    description: "Seasonal lake and bird sanctuary.",
    details:
      "Famous for migratory birds such as flamingos. Best visited during the rainy season.",
    image: "/lake-chelekleka-bishoftu.jpg",
    location: "Bishoftu",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Lake+Chelekleka+Bishoftu",
  },
  {
    id: 7,
    name: "Bishoftu Crater Lakes Viewpoint",
    category: "Natural Wonder",
    description: "Panoramic views of Bishoftu’s volcanic crater lakes.",
    details:
      "An elevated viewpoint offering breathtaking photography and sightseeing opportunities.",
    image: "/bishoftu-crater-lakes-viewpoint.jpg",
    location: "Bishoftu Highlands",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bishoftu+Crater+Lakes+Viewpoint",
  },
  {
    id: 8,
    name: "Kuriftu Cultural Experience",
    category: "Cultural Site",
    description: "Traditional culture, art, and lakeside leisure.",
    details:
      "Enjoy Ethiopian cultural performances, art displays, and fine dining around Kuriftu Resort.",
    image: "/kuriftu-cultural.jpg",
    location: "Bishoftu",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Kuriftu+Resort+Bishoftu",
  },
  {
    id: 9,
    name: "Bishoftu Local Market",
    category: "Cultural Site",
    description: "Authentic Ethiopian market experience.",
    details:
      "Discover local foods, handmade goods, and daily life in Bishoftu’s vibrant markets.",
    image: "/bishoftu-local-market.jpg",
    location: "Bishoftu Town Center",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bishoftu+Local+Market",
  },
  {
    id: 10,
    name: "Bishoftu Recreational Walking Park",
    category: "Cultural Site",
    description: "Public park for walking, jogging, and family time.",
    details: "A popular local spot for evening walks and social gatherings.",
    image: "/bishoftu-recreation-park.jpg",
    location: "Bishoftu Town",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bishoftu+Recreational+Park",
  },
  {
    id: 11,
    name: "Heritage Experiences Bishoftu",
    category: "Travel Agent",
    description: "Cultural and historical guided tours in Bishoftu.",
    details:
      "Focused on Bishoftu’s heritage, volcanic lakes, and local traditions.",
    image: "/heritage-hotel-traditional.jpg",
    contact: "heritage@gobisoftu.travel",
    location: "Bishoftu",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Heritage+Experiences+Bishoftu",
  },
];

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Cultural Site", "Natural Wonder", "Travel Agent"];

  const filteredItems =
    selectedCategory === "All"
      ? exploreItems
      : exploreItems.filter((item) => item.category === selectedCategory);

  const travelAgents = exploreItems.filter(
    (item) => item.category === "Travel Agent"
  );

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-secondary/10 to-accent/5 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Bishoftu
            </h1>
            <p className="text-lg text-foreground/70">
              Discover cultural heritage, natural wonders, and connect with
              experienced travel professionals.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        item.category === "Cultural Site"
                          ? "bg-accent/20 text-accent"
                          : item.category === "Natural Wonder"
                          ? "bg-secondary/20 text-secondary"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {item.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-3">
                    {item.description}
                  </p>
                  <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                    {item.details}
                  </p>
                  {item.location && (
                    <div className="text-xs text-foreground/60 mb-2">
                      📍 {item.location}
                    </div>
                  )}
                  {item.contact && (
                    <div className="text-xs text-foreground/60 mb-2">
                      📧 {item.contact}
                    </div>
                  )}
                  {item.mapUrl && (
                    <a
                      href={item.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm font-semibold text-primary hover:underline"
                    >
                      🗺️ Open in Google Maps
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Agents CTA Section */}
        {(selectedCategory === "All" ||
          selectedCategory === "Travel Agent") && (
          <section className="bg-primary/10 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Connect with Local Experts
                </h2>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  Our featured travel agents offer personalized experiences
                  tailored to your interests. From cultural immersion to
                  adventure expeditions, they'll make your Bishoftu journey
                  unforgettable.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {travelAgents.map((agent) => (
                  <div
                    key={agent.id}
                    className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
                  >
                    <img
                      src={agent.image || "/placeholder.svg"}
                      alt={agent.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {agent.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4">
                      {agent.details}
                    </p>
                    {agent.contact && (
                      <a
                        href={`mailto:${agent.contact}`}
                        className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all text-sm"
                      >
                        Contact Agent
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
