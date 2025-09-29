# Case Study Template Instructions

## How to Add Your Case Studies

1. **Open** `/components/CaseStudy.tsx`

2. **Replace the template data** in the `caseStudies` array with your actual projects

3. **For each case study, fill out:**
   - `title`: Your project name
   - `subtitle`: One-line description
   - `description`: 2-3 sentences explaining the project and its impact
   - `image`: Use the unsplash_tool to get a relevant image URL
   - `duration`: How long the project took
   - `team`: Team size (e.g., "Individual", "Team of 3", "Pair programming")
   - `outcome`: Key metric or achievement
   - `technologies`: Array of tech stack used
   - `highlights`: 3-4 bullet points of main accomplishments
   - `link`: GitHub repo, demo, or detailed case study link

## Example Case Study Entry:

```javascript
{
  title: "FPGA Neural Network Accelerator",
  subtitle: "Hardware acceleration for machine learning inference",
  description: "Designed and implemented a custom FPGA-based neural network accelerator achieving 10x speedup over CPU implementation. Optimized for convolutional neural networks with quantized weights.",
  image: "https://images.unsplash.com/photo-1598845685288-98d5e7128987", // FPGA/hardware image
  duration: "4 months",
  team: "Team of 2",
  outcome: "10x performance improvement",
  technologies: ["VHDL", "Xilinx Vivado", "Python", "TensorFlow", "C++"],
  highlights: [
    "Implemented custom convolution engine with parallel processing",
    "Achieved 200 MHz clock frequency with optimized pipeline",
    "Reduced memory bandwidth by 60% with smart caching",
    "Integrated with existing ML inference framework"
  ],
  link: "https://github.com/yourusername/fpga-nn-accelerator"
}
```

## Tips:
- Focus on your most impressive projects
- Include quantifiable results (performance improvements, efficiency gains, etc.)
- Make sure links work and point to actual repositories or demos
- Use technical language that showcases your expertise
- Keep descriptions concise but impactful

## Adding More Case Studies:
Simply copy the template structure and add more objects to the `caseStudies` array. The component will automatically render all of them.