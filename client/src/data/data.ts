import assets from "../assets/assets";

export const brands = [
  {
    id: "stihl",
    name: "Stihl",
    logo: assets.stihl_logo,
    description: "World leader in chainsaws and outdoor power equipment",
    featured: true,
    partnership: true,
    since: 2018,
  },
  {
    id: "motolite",
    name: "Motolite",
    logo: assets.motolite_logo,
    description: "Trusted automotive battery brand",
    featured: true,
    partnership: false,
    since: 2018,
  },
  {
    id: "bosch",
    name: "Bosch",
    logo: assets.bosch_logo,
    description: "Global leader in power tools and innovative solutions",
    featured: false,
    partnership: false,
    since: 2019,
  },
  {
    id: "makita",
    name: "Makita",
    logo: assets.makita_logo,
    description: "Reliable and durable power tools for professionals",
    featured: false,
    partnership: false,
    since: 2019,
  },
  {
    id: "stanley",
    name: "Stanley",
    logo: assets.stanley_logo,
    description: "Trusted hand tools and hardware brand worldwide",
    featured: false,
    partnership: false,
    since: 2020,
  },
  {
    id: "shell",
    name: "Shell",
    logo: assets.shell_logo,
    description: "Leading global supplier of fuels and lubricants",
    featured: false,
    partnership: false,
    since: 2021,
  },
  {
    id: "petron",
    name: "Petron",
    logo: assets.petron_logo,
    description: "Philippines’ leading oil refining and marketing company",
    featured: false,
    partnership: false,
    since: 2021,
  },
  {
    id: "3m",
    name: "3M",
    logo: assets.threeem_logo,
    description: "Innovative solutions in safety, adhesives, and construction",
    featured: false,
    partnership: false,
    since: 2020,
  },
  {
    id: "boysen",
    name: "Boysen",
    logo: assets.boysen_logo,
    description: "Philippines’ top paint and coatings brand",
    featured: false,
    partnership: false,
    since: 2019,
  }
];


export const stihlCategories = [
  { id: "chainsaws", name: "Chainsaws, Saw chains and Guide bar" },
  { id: "trimmers", name: "Grass Trimmers and Brushcutters" },
  { id: "lawn-equipment", name: "Lawn Equipment" },
  { id: "cleaning", name: "Cleaning System" },
  { id: "mistblowers", name: "Mistblowers and Sprayers" },
  { id: "hedge-trimmers", name: "Hedge Trimmers" },
  { id: "shredders", name: "Garden Shredders" },
  { id: "harvesters", name: "Harvesters" },
  { id: "tillers", name: "Tillers" },
  { id: "augers", name: "Augers & Drills" },
  { id: "cutters", name: "Cut-off Machines and Concrete Cutters" },
  { id: "water-pump", name: "Water Pump" },
  { id: "ppe", name: "Personal Protective Equipment" }
];

export const stihlProducts = {
  brand: "Stihl",
  categories: [
    {
      id: "chainsaws",
      name: "Chainsaws, Saw chains and Guide bar",
      products: [
        { id: "ms182", name: "MS 182", image: assets.ms182, description: "Compact chainsaw for home use, ideal for cutting firewood and small trees." },
        { id: "ms162", name: "MS 162", image: assets.ms162, description: "Lightweight chainsaw for occasional use, perfect for pruning and light cutting." },
        { id: "ms212", name: "MS 212", image: assets.ms212, description: "Versatile chainsaw for homeowners, great for felling small trees and maintenance." },
        { id: "ms250", name: "MS 250", image: assets.ms250, description: "Powerful chainsaw for frequent use, suitable for firewood and medium-sized trees." },
      ]
    },
    {
      id: "trimmers",
      name: "Grass Trimmers and Brushcutters",
      products: [
        { id: "fs3001", name: "FS 3001", image: assets.fs3001, description: "High-performance brushcutter for professional landscaping tasks." },
        { id: "fs230", name: "FS 230", image: assets.fs230, description: "Versatile brushcutter for heavy-duty grass and weed clearing." },
      ]
    }
  ]
}

export default brands;