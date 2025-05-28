# Campus on Chain 🌐

Campus on Chain is the leading Web3 platform for university students in Chile, bridging the gap between traditional education and the blockchain ecosystem. We connect students with real opportunities in Web3 while providing universities with modern tools for student engagement.

## 🌟 Vision & Mission

### Vision

To become the primary gateway for university students in South America to enter the Web3 ecosystem, creating a vibrant community where education meets innovation.

### Mission

- Empower students with Web3 knowledge and opportunities
- Connect universities with blockchain innovation
- Create a trusted platform for student verification and benefits
- Build the largest network of Web3-interested university students in South America

## 🎯 Core Features

### For Students

- **Web3 Identity**: Create your Web3 identity with Privy wallet integration
- **Profile System**: Showcase your university affiliation, field of study, and Web3 interests
- **POAP Gallery**: Display your event participation and achievements
- **Student Network**: Connect with other Web3-interested students across universities
- **Event Discovery**: Get notified about Web3 meetups, conferences, and hackathons
- **Career Opportunities**: Access Web3 job listings and internship opportunities

### For Universities

- **Student Verification**: Secure verification system for university students
- **Web3 Integration**: Modern tools for student engagement
- **Future Governance**: Preview of upcoming DAO features for university decisions

### For Businesses

- **Student Access**: Connect with verified university students
- **Discount System**: Offer exclusive benefits to Campus on Chain members
- **Talent Pipeline**: Access a pool of Web3-interested students

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with shadcn/ui components
- **State Management**: React Context + Zustand
- **Authentication**: Privy for Web3 wallet integration
- **Event Management**: Luma API integration

### Backend

- **API**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Storage**: IPFS for decentralized storage
- **Caching**: Redis for performance optimization

### Blockchain

- **Wallet**: Privy for seamless Web3 authentication
- **Smart Contracts**: Solidity for future governance features
- **Network**: Ethereum Mainnet + Optimism for scaling

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm
- MetaMask or other Web3 wallet
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/campus-on-chain/campus-on-chain.git
cd campus-on-chain
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Required environment variables:

```env
# Privy
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
PRIVY_APP_SECRET=your_privy_app_secret

# Database
DATABASE_URL=your_database_url

# Luma
LUMA_API_KEY=your_luma_api_key

# IPFS
IPFS_PROJECT_ID=your_ipfs_project_id
IPFS_PROJECT_SECRET=your_ipfs_project_secret
```

4. Run the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Documentation

- [User Guide](docs/user-guide.md) - How to use Campus on Chain
- [API Documentation](docs/api.md) - API endpoints and usage
- [Partner Integration](docs/partner-integration.md) - How to integrate with Campus on Chain
- [Technical Architecture](docs/architecture.md) - System design and architecture

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- Code style and standards
- Pull request process
- Development workflow
- Testing requirements

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 Community & Support

- [Discord](https://discord.gg/campusonchain) - Join our community
- [Twitter](https://twitter.com/campusonchain) - Follow for updates
- [Telegram](https://t.me/campusonchain) - Get instant support

## 🙏 Acknowledgments

- Our university partners in Chile
- The Web3 community for their support
- Our amazing contributors and maintainers
- The Privy team for their excellent authentication solution

---

Built with ❤️ for the future of education in Chile and South America

               @@@@@@@@      @@@        @@#      @@@   @@@@@@@@   @@@     @@@   .@@@@@@+
             @@@@@  :@@     @@@@@      =@@@-    @@@@   @@@+ *@@@- @@@     %@@  =@@@   @
            @@@@           #@@@@@+     @@@@@    @@@@-  @@@:  .@@% @@@     %@@  @@@@
           :@@@            @@% @@@     @@@@@@  @@@@@%  @@@:  @@@+ @@@     %@@   @@@@@#
           +@@@           @@@  :@@@   =@@#-@@=@@@ @@@  @@@@@@@@@  @@@     %@@     @@@@@@
            @@@          %@@@@@@@@@+  @@@. @@@@@  @@@  @@@+       @@@     @@@        @@@%
             @@@=     % :@@@@@@@@@@@  @@@   @@@@  #@@* @@@:       @@@+    @@@  .@.   @@@*
              @@@@@@@@@ @@@      -@@@.@@@   *@@   .@@@ @@@:        @@@@@@@@@   @@@@@@@@@
                 @@@@.  ::        .::.::     *     ::.  ::           +@@@#       :@@@-


             .+=====+-   ==-     ==:       .+==+==  ==    :=-     ==-    .=+  +=-     =+.
            -=+     ==+  ====    ==:      ===       ==    :=-    ====.   .=+  +===    =+.
           .+=       ==: =+.==.  ==:     .==        ==:...-=-   :=: =+    =+  ++ ==   =+.
           .==       -=: =+  :== ==:     -==        ==----==-   =+  :=-  .=+  ++  -=- =+.
            +=-      ==. =+    +===:      ==        ==    :=-  +=======.  =+  ++   .+==+.
             ===-:-===   =+     ===:       +==::-=  ==    :=- :==     =+  =+  ++     ==+.
               -===-     --      .=.         -===:  --    .-: --      .-. --  --      :=
