import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import sns from '../abi/ERC721.json'

export function useSNSContract() {
  return useContract({
    abi: sns.abi as Abi,
    address: '0x07875d3d9cc6b1027a4be38703f11f81161db719dac478d56c7adb4fc2234071',
  })
}
