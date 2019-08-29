const platform = process.platform === 'win32' ? 'windows' : process.platform

module.exports = {
  name: 'pantheon',
  displayName: 'Pantheon',
  type: 'client',
  // repository: 'https://bintray.com/consensys/pegasys-repo/pantheon',
  repository: '',
  dependencies: {
    environment: [
      {
        name: 'Java',
        version: ''
      }
    ]
    // clients: []
  },
  settings: [

  ],
  about: {
    description: `
    Pantheon is an open-source Ethereum client developed under the Apache 2.0 license and written in Java. It runs on the Ethereum public network, private networks, and test networks such as Rinkeby, Ropsten, and Görli. Pantheon implements Proof of Work (Ethash) and Proof of Authority (IBFT 2.0 and Clique) consensus mechanisms.

    You can use Pantheon to develop enterprise applications requiring secure, high-performance transaction processing in a private network.

    Pantheon supports enterprise features including privacy and permissioning.
    `,
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/PegaSysEng/pantheon'
      }
    ],
    docs: [
      {
        name: 'Pantheon Docs',
        url: 'https://docs.pantheon.pegasys.tech/en/latest/'
      }
    ]

  }
}