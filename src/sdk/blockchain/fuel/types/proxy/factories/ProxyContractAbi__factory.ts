/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.77.0
  Forc version: 0.51.1
  Fuel-Core version: 0.22.1
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { ProxyContractAbi, ProxyContractAbiInterface } from "../ProxyContractAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "enum Errors",
      "components": [
        {
          "name": "InvalidPayment",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidPredicateRoot",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        6
      ]
    },
    {
      "typeId": 5,
      "type": "enum OrderType",
      "components": [
        {
          "name": "SELL",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "BUY",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct AssetId",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct ContractId",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "struct CreateOrderEvent",
      "components": [
        {
          "name": "predicate_root",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "maker",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "base_asset",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "quote_asset",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "base_amount",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "order_type",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "min_fulfill_base_amount",
          "type": 4,
          "typeArguments": [
            {
              "name": "",
              "type": 12,
              "typeArguments": null
            }
          ]
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "u32",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "price",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "predicate_root",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "min_fulfill_base_amount",
          "type": 4,
          "typeArguments": [
            {
              "name": "",
              "type": 12,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "create_order",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "payable",
          "arguments": []
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "BASE_ASSET",
      "configurableType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      },
      "offset": 3484
    },
    {
      "name": "QUOTE_ASSET",
      "configurableType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      },
      "offset": 3516
    },
    {
      "name": "BASE_ASSET_DECIMALS",
      "configurableType": {
        "name": "",
        "type": 11,
        "typeArguments": null
      },
      "offset": 3548
    },
    {
      "name": "QUOTE_ASSET_DECIMALS",
      "configurableType": {
        "name": "",
        "type": 11,
        "typeArguments": null
      },
      "offset": 3572
    },
    {
      "name": "PRICE_DECIMALS",
      "configurableType": {
        "name": "",
        "type": 11,
        "typeArguments": null
      },
      "offset": 3556
    }
  ]
};

const _storageSlots: StorageSlot[] = [];

export class ProxyContractAbi__factory {
  static readonly abi = _abi;

  static readonly storageSlots = _storageSlots;

  static createInterface(): ProxyContractAbiInterface {
    return new Interface(_abi) as unknown as ProxyContractAbiInterface
  }

  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): ProxyContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as ProxyContractAbi
  }

  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<ProxyContractAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const { storageSlots } = ProxyContractAbi__factory;

    const contract = await factory.deployContract({
      storageSlots,
      ...options,
    });

    return contract as unknown as ProxyContractAbi;
  }
}
