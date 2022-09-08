/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  gettingStarted: [
    {
      type: 'autogenerated', 
      dirName: '.'
    },    
  ],


  
/*
module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  gettingStarted: [
        'getting-started',
    {
      // Learn category for begenniong and introduction documentation
      type: 'category',
      label: 'Learn',
      collapsible: false,
      items: [
        'Learn/what-is-qrl',
        'Learn/ots-keys',
        'Learn/whitepaper',
        'Learn/qrl-emission',
        {
          // Basics category for things like what is QRL, blockchain, XMSS OTS keys, Quantum Threat etc
          type: 'category',
          label: 'Blockchain',
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'Learn/blockchain'
            },  
          ]
        },
        {
          // Basics category for things like what is QRL, blockchain, XMSS OTS keys, Quantum Threat etc
          type: 'category',
          label: 'Cryptography',
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'Learn/cryptography'
            },  
          ]
        },
        {
          // Basics category for things like what is QRL, blockchain, XMSS OTS keys, Quantum Threat etc
          type: 'category',
          label: 'Quantum',
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'Learn/quantum'
            },  
          ]
        },
      ]
    },
    {
      // Use category for using qrl
      type: 'category',
      label: 'Use',
      collapsible: true,
      items: [
        {
          // Everything on how to use the Wallet, mobile, desktop, web, Ledger and all of the features available
          type: 'category',
          label: 'Wallet',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Wallet'
            },  
          ]
        },
        {
          // All things related to the node, install running and basic functions
          type: 'category',
          label: 'Node',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Node'
            },  
          ]
        },
        {
          // QRL Tools section
          type: 'category',
          label: 'Tools',
          items: [
            'Tools/qrl-tools',
            {
              type: 'category',
              label: 'Tokens',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Tools/tokens'
                },  
              ]
            },
            {
              type: 'category',
              label: 'NFT',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Tools/nft'
                },  
              ]
            },
            {
              type: 'category',
              label: 'Notarisation',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Tools/notarise'
                },  
              ]
            },
            {
              type: 'category',
              label: 'Multi-Signature',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Tools/multisig'
                },  
              ]
            },
            {
              type: 'category',
              label: 'Messages',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Tools/messages'
                },  
              ]
            },
            {
              type: 'category',
              label: 'Explorer',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Tools/explorer'
                },  
              ]
            },
            {
              type: 'category',
              label: 'Ephemeral ',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Tools/ems'
                },  
              ]
            },
            {
              type: 'category',
              label: 'Lattice Keys',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Tools/crystals'
                },  
              ]
            },

          ]
        },
        {
          // Beginning user mining guides and documentation
          type: 'category',
          label: 'Mining',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Mining'
            },  
          ]
        },
        {
          // QRL integrations and third party tool and systems like Keybase and League of Entropy
          type: 'category',
          label: 'Integrations',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Integrations'
            },  
          ]
        }
      ]
    },
    {
      // Advanced documentation focused on building and developing on the chain
      type: 'category',
      label: 'Build',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'Developers'
        },  
      ]
    },
    {
      // Advanced documentation focused on building and developing on the chain
      type: 'category',
      label: 'Maintain',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'Maintenance'
        },  
      ]
    },
    {
      // Tutorials from beginner to advanced functions like running testnet and mainnet on a single server.
      type: 'category',
      label: 'Tutorials',
      items: [
        'Tutorials/qrl-tutorials',
        'Tutorials/notarize-qrl-cli',
        {
          type: 'category',
          label: 'Node',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Tutorials/Node'
            },  
          ]
        },
        {
          type: 'category',
          label: 'Wallet',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Tutorials/Wallet'
            },  
          ]
        }
      ]
    },
   /*
    {
      type: 'link',
      label: 'TheQRL.org', // The link label
      href: 'https://theqrl.org', // The external URL
    },
    {
      type: 'link',
      label: 'QRL Web Wallet', // The link label
      href: 'https://wallet.theqrl.org', // The external URL
    },
    {
      type: 'link',
      label: 'QRL Explorer', // The link label
      href: 'https://explorer.theqrl.org', // The external URL
    },
  ],
    */

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

/*

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  gettingStarted: [
    {
      type: 'autogenerated', 
      dirName: '.'
    },    
  ],


  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   
};

----------------------------=


module.exports = {
  mySidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorial-intro',
        {
          type: 'autogenerated',
          dirName: 'tutorials/easy', // Generate sidebar slice from docs/tutorials/easy
        },
        'tutorial-medium',
        {
          type: 'autogenerated',
          dirName: 'tutorials/advanced', // Generate sidebar slice from docs/tutorials/hard
        },
        'tutorial-end',
      ],
    },
    {
      type: 'autogenerated',
      dirName: 'guides', // Generate sidebar slice from docs/guides
    },
    {
      type: 'category',
      label: 'Community',
      items: ['team', 'chat'],
    },
  ],
};
*/