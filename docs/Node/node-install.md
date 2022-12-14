---
docstatus: DRAFT  # one of {DRAFT, 30%, 90%, COMPLETE}
id: node-installation
title: Zond Node Installation
hide_title: false
hide_table_of_contents: false
sidebar_label: Zond Node - Installation
sidebar_position: 3
pagination_label: Zond Node - Installation
custom_edit_url: https://github.com/theQRL/zond-documentation/edit/main/docs/Node/node-install.md
description: Zond Node Installation
keywords:
  - docs
  - Node node-installation
  - Install Zond
image: /assets/img/icons/yellow.png
slug: /node/node-installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution DOCUMENT STATUS 
<span>This document is in: <b>{frontMatter.docstatus}</b> status and needs additional input!</span>

- Need install instructions for other OS's
:::

:::danger
These instructions will change frequently as we develop the node software. Check back often as these will be kept up to date until the final solution is in place.
:::

This document covers getting started installing the Zond node software and will allow interaction with the Zond blockchain.


### Prerequisite

- Go version 1.18.6 or greater is installed `go version`
- Ensure the local copy of the Zond github repo has the latest code

:::info Minimum Node Hardware Requirements
There are some basic requirements that must be met to run a Zond node *(Yet to be defined)*. See the [Zond Node Requirements](node-requirements) documentation for more info.
:::


## Zond Node Installation

Follow the directions below to get started running a Zond POS Node.

<Tabs
    defaultValue="ubuntu"
    groupId="os"
    values={[
        {label: 'Ubuntu', value: 'ubuntu'},
        {label: 'MacOS', value: 'macos'},
        {label: 'Windows', value: 'windows'},
    ]}>

<TabItem value="ubuntu">

Installation instructions for the Zond Node on Ubuntu.

##### Requirements

- `build-essential` is installed including `gcc`

#### Install Steps


```bash
sudo apt update
sudo apt install build-essential

# clone the zond repo, grabbing the latest code
git clone https://github.com/theqrl/zond ~/zond

# Build the node
cd zond
go build ~/zond/cmd/zond-cli
go build ./cmd/gzond
````

:::tip 
This is the recommended installation method, and most common way to run a Zond Node.
:::

#### Install Script

For a simple, no fuss node install use the script Jack provided us. The code can be found here [github.com/jackalyst/zond-init](https://github.com/jackalyst/zond-init).


```bash
bash <(curl -s https://raw.githubusercontent.com/jackalyst/zond-init/main/init.sh)
```

Or grab the source and execute locally.

```bash
git clone https://github.com/jackalyst/zond-init.git
cd zond-init
# Check the source code before executing
less init.sh
# Make executable and run
chmod +x init.sh
./init.sh
```

:::note
It is important to read and understand what a script is doing on your machine before you execute it. Check the source before running! [Source code is here](https://github.com/jackalyst/zond-init/blob/main/init.sh)
:::

There will be a few questions to answer, select (Y)es to each and there will be a running node in a screen session. `screen -r` to access it or see the logs in the `~/.zond` directory `tail -f ~/.zond/zond-daemon.log` 


</TabItem>
<TabItem value="macos">

#### Zond MacOS Installation

Installation instructions for the Zond Node on MacOS. Tested with the latest MacOS version `Big Sur 11.6`


```bash

```

> FIXME!! Need to update install instructions for MacOS

</TabItem>
<TabItem value="windows">

#### Zond Windows Installation

Installation instructions for the Zond Node on Windows.

```bash

```

> FIXME!! Need to update install instructions for Windows


</TabItem>
</Tabs>






## Running Zond

After successful installation of the Zond node the command line tools are available immediately. For more information see the [Zond Node CLI Documentation](node-cli).

The node software runs in the current shell, to run the node in the background, use something like `screen` to disconnect the shell from the running node allowing syncing to happen in the background.

See the [screen documentation](https://www.gnu.org/software/screen/manual/screen.html) for more information and installation instructions.

#### `gzond`

To begin the syncing process run the node software.

```sh
./gzond
```

Output looks something like this.

```
[2022-09-07 18:22:12]  INFO Current Block Slot Number 2918 Hash 0xce165cf88728259eb6cf533373cf8622190685437fb4cb7c1ad000d1f9e1c1a7
[2022-09-07 18:22:12]  INFO Main Chain Loaded Successfully
[2022-09-07 18:22:12]  INFO Listening at /ip4/0.0.0.0/tcp/15005/p2p/QmbtFJzvdMHS6sfBFnBQTLVg2rj6pj7wRjjwnSYfBzReBT
[2022-09-07 18:22:12]  INFO Running download monitor
[2022-09-07 18:22:22]  INFO Minting Block #2919
[2022-09-07 18:22:22]  INFO Added Block #2919 0xa6836b628c70a028b1b9b3d531b3edcc97bddde37bb9ff4a6343075bcc3529e3
[2022-09-07 18:22:22]  INFO Protocol Txs Count 2 | Txs Count 0
```

This will start the node software, create a default node directory at `~/.zond` and begin syncing blocks from the known peers.


##### Stop The Node

Use `ctl+c` to stop the node in a linux terminal

```
[2022-09-07 18:22:23]  INFO Shutting Down POS
[2022-09-07 18:22:23]  INFO Shutting Down Node
```

