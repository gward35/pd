import { DataType } from '../types/types'

export const data: DataType = {
  headers: ['Vulnerability', 'Date Found', 'Risk', 'Affected Assets', 'Status'],
  rows: [
    {
      title: 'Cisco Small Business RV Series - OS Command Injection',
      dateFound: '4 hrs ago',
      risk: 'Low',
      affectedAssets: 20,
      status: 'Create Jira',
      tags: ['status', 'CVE-2021-1472', 'CWE-287', 'Remote Code Execution'],
    },
    {
      title: 'PhpMyAdmin <4.8.2 - Local File Inclusion',
      dateFound: '4 hrs ago',
      risk: 'Critical',
      affectedAssets: 20,
      status: 'Create Jira',
      tags: ['CVE-2021-1472', 'CWE-287', 'Remote Code Execution'],
    },
    {
      title: 'Sophos UTM Preauth - Remote Code Execution',
      dateFound: '4 hrs ago',
      risk: 'High',
      affectedAssets: 20,
      status: 'Open Jira',
      tags: ['CVE-2021-1472', 'CWE-287', 'Remote Code Execution'],
    },
    {
      title: 'Citrix ShareFile StorageZones <= 5.10.x - Arbitrary File Read',
      dateFound: '4 hrs ago',
      risk: 'Low',
      affectedAssets: 20,
      status: 'Open Jira',
      tags: ['CVE-2021-1472', 'CWE-287', 'Remote Code Execution'],
    },
    {
      title: 'Microsoft Exchange Server SSRF Vulnerability',
      dateFound: '4 hrs ago',
      risk: 'Medium',
      affectedAssets: 20,
      status: 'Create Jira',
      tags: ['CVE-2021-1472', 'CWE-287', 'Remote Code Execution'],
    },
    {
      title: 'GitLab CE/EE - Import RCE',
      dateFound: '4 hrs ago',
      risk: 'None',
      affectedAssets: 20,
      status: 'Create Jira',
      tags: ['status', 'CVE-2021-1472', 'CWE-287', 'Remote Code Execution'],
    },
    {
      title: 'phpMyAdmin < 5.1.2 - Cross-Site Scripting',
      dateFound: '4 hrs ago',
      risk: 'Critical',
      affectedAssets: 20,
      status: 'Open Jira',
      tags: ['status', 'CVE-2021-1472', 'CWE-287', 'Remote Code Execution'],
    },
  ],
}
