import assets from "../assets/assets";

export const brands = [
  {
    id: "stihl",
    name: "Stihl",
    logo: assets.stihl_logo,
    description: "World leader in chainsaws and outdoor power equipment",
    featured: true,
    since: 2018
  },
  {
    id: "motolite",
    name: "Motolite",
    logo: assets.motolite_logo,
    description: "Trusted automotive battery brand",
    featured: false,
    since: 2018
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
        { id: "ms182", name: "MS 182" },
        { id: "ms162", name: "MS 162" },
        { id: "ms212", name: "MS 212" },
        { id: "ms250", name: "MS 250" },
        { id: "ms230", name: "MS 230" },
        { id: "stihl070", name: "Stihl 070" },
        { id: "ms651", name: "MS 651" },
        { id: "ms462", name: "MS 462" },
        { id: "ms382", name: "MS 382" },
        { id: "hta50", name: "HTA 50" },
        { id: "ht135", name: "HT 135" },
        { id: "ht56", name: "HT 56" },
        { id: "gta26", name: "GTA 26" },
        { id: "ht75", name: "HT 75" },
        { id: "hta86", name: "HTA 86" },
        { id: "ms194t", name: "MS 194 T" },
        { id: "ms170carving", name: "MS 170 Carving" },
        { id: "ms462rescue", name: "MS 462 Rescue Saw" },
        { id: "mse210cbq", name: "MSE 210 C-BQ" },
        { id: "mse170cbq", name: "MSE 170 C-BQ" },
        { id: "mse141cq", name: "MSE 141 C-Q" },
        { id: "msa70", name: "MSA 70" },
        { id: "msa220cb", name: "MSA 220 C-B" },
        { id: "msa160", name: "MSA 160" },
        { id: "rmxpmx", name: "RMX, PMX" },
        { id: "rmhsrmh", name: "RMHS, RMH" },
        { id: "carving", name: "Carving" },
        { id: "rdr", name: "RDR" },
        { id: "duro3chain", name: "Duro 3 Saw Chain" },
        { id: "supersaw", name: "Super Saw Chain" },
        { id: "super3saw", name: "Super 3 Saw Chain" },
        { id: "micro3saw", name: "Micro 3 Saw Chain" },
        { id: "microsaw", name: "Micro Saw Chain" },
        { id: "eslight", name: "Stihl Rollomatic ES Light" },
        { id: "elight", name: "Stihl Rollomatic E Light" },
        { id: "eminilight", name: "Stihl Rollomatic E Mini Light" },
        { id: "carvinge", name: "Stihl Carving E" },
        { id: "duromatic", name: "Stihl Duromatic E" },
        { id: "es", name: "Stihl Rollomatic ES" },
        { id: "e", name: "Stihl Rollomatic E" },
        { id: "eminibar", name: "Stihl Rollomatic E Mini" },
        { id: "barleveller", name: "Guide Bar Leveller" },
        { id: "storagecase", name: "Storage Case for Saw Chains" },
        { id: "fileholder", name: "2-in-1 File Holder" },
        { id: "fillingkits", name: "Filling Kits" }
      ]
    },
    {
      id: "trimmers",
      name: "Grass Trimmers and Brushcutters",
      products: [
        { id: "fr230", name: "FR 230" },
        { id: "fs3001", name: "FS 3001" },
        { id: "fs230", name: "FS 230" },
        { id: "fr230b", name: "FR 230 (dup)" },
        { id: "fs460", name: "FS 460" },
        { id: "fs250", name: "FS 250" },
        { id: "fs120", name: "FS 120" },
        { id: "fse71", name: "FSE 71" },
        { id: "fsa60", name: "FSA 60" },
        { id: "fsa85", name: "FSA 85" },
        { id: "fsa57", name: "FSA 57" }
      ]
    }
  ]
}

export default brands;