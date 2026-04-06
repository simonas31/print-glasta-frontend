import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Custom Kitchen Panels",
    desc: "Heat-resistant printed glass for modern kitchens",
    img: "https://images.unsplash.com/photo-1581093588401-22f24c1d84c0",
  },
  {
    title: "Office Glass Branding",
    desc: "High-quality logo prints on glass walls",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    title: "Decorative Wall Art",
    desc: "Stylish glass prints for interiors",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
];

export default function GlassGallery() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <Card key={i} className="overflow-hidden hover:scale-105 transition">
          <img src={item.img} className="h-48 w-full object-cover" />
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
