module.exports = {
  name: 'pantheon',
  displayName: 'Pantheon',
  type: 'client',
  repository: 'https://bintray.com/consensys/pegasys-repo/pantheon',
  filter: {
    name: {
      excludes: ['.zip', 'snapshot']
    }
  },
  dependencies: {
    runtime: [
      {
        name: 'Java',
        type: 'JDK',
        version: '11'
      }
    ]
    // clients: []
  },
  settings: [
    {
      id: 'java_path',
      label: 'Java Path',
      flag: '%s',
      default: 'C:/Program Files/Java/jdk-12.0.2/bin/java.exe'
    },
    {
      id: 'vertx_cp_resolver',
      label: 'Vert.x Classpath Resolver',
      docs: 'https://vertx.io/docs/vertx-core/ceylon/#_using_the_file_system_with_vert_x',
      flag: '--Dvertx.disableFileCPResolving=%s',
      group: 'DEFAULT_JVM_OPTS',
      default: 'true',
      required: true
    },
    {
      id: 'pantheon_home',
      label: 'Pantheon Home',
      type: 'directory',
      flag: '-Dpantheon.home=%s',
      group: 'DEFAULT_JVM_OPTS',
      default: '%PACKAGE_PATH%/*'
    },
    {
      id: 'log4j_shutdown',
      label: 'Logger Shutdown Hook',
      docs: 'https://logging.apache.org/log4j/log4j-2.4/faq.html#shutdown',
      flag: '-Dlog4j.shutdownHookEnabled=%s',
      group: 'DEFAULT_JVM_OPTS',
      default: 'false',
      required: true
    },
    {
      id: 'add_opens',
      label: 'Deep Reflection',
      docs: 'https://docs.oracle.com/javase/9/migrate/toc.htm#JSMIG-GUID-12F945EB-71D6-46AF-8C3D-D354FD0B1781',
      flag: '--add-opens %s',
      group: 'DEFAULT_JVM_OPTS',
      default: 'java.base/sun.security.provider=ALL-UNNAMED',
      required: true
    },
    {
      id: 'classpath',
      label: 'Classpath',
      flag: '-classpath',
      default: '%PACKAGE_PATH%/*/lib/\* tech.pegasys.pantheon.Pantheon',
      hidden: true
    }
    // TODO allow this kind of settings:
    // execute "%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %PANTHEON_OPTS%  -classpath "%CLASSPATH%" tech.pegasys.pantheon.Pantheon %CMD_LINE_ARGS%

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
    // gitter https://gitter.im/PegaSysEng/pantheon 
    // issues https://pegasys1.atlassian.net/secure/Dashboard.jspa?selectPageId=10117

  }
}