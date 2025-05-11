# FinTech Dashboard

A modern, responsive financial dashboard built with Next.js and Tailwind CSS.

![FinTech Dashboard Preview](/public/dashboard-preview.png)

## Features

- 📊 Comprehensive financial analytics and visualizations
- 💰 Transaction management and tracking
- 📈 Stock portfolio monitoring
- 💼 Asset allocation analysis
- 🔑 API key management
- 👥 User management system
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js App Router

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Typography**: Google Fonts (Inter, Outfit, Poppins)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/fintech-dashboard.git
   cd fintech-dashboard
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

\`\`\`
fintech-dashboard/
├── app/                    # Next.js App Router
│   ├── api/                # API routes
│   ├── (routes)/           # Application routes
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── dashboard/          # Dashboard-specific components
│   ├── layout/             # Layout components
│   ├── modals/             # Modal components
│   ├── skeletons/          # Loading skeleton components
│   └── ui/                 # UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and data
├── public/                 # Static assets
├── styles/                 # Global styles
└── types/                  # TypeScript type definitions
\`\`\`

## Pages

- **Dashboard**: Overview of financial metrics and KPIs
- **Transactions**: Manage and track financial transactions
- **Stocks**: Monitor stock portfolio performance
- **Stocks-Assets**: View asset allocation and performance
- **API Management**: Manage API keys and monitor usage
- **User Management**: Manage user accounts and permissions
- **Settings**: Configure application settings

## Customization

### Theming

The dashboard supports both light and dark modes. The theme can be toggled using the theme switcher in the header.

### Adding New Components

1. Create a new component in the appropriate directory
2. Import and use the component in your pages

### Adding New Pages

1. Create a new page in the `app` directory
2. Add the route to the sidebar navigation in `components/layout/sidebar.tsx`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Recharts](https://recharts.org/) for the chart components
- [Lucide React](https://lucide.dev/) for the icon set
