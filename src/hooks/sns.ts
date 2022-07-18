import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import sns from '~/abi/sns.json'

export function useSNSContract() {
  return useContract({
    abi: sns as Abi,
    address: '0x0040535f46ad1e20d18a92fcd87c789aa386edd28bb298372cc55c779d61ecd5',
  })
}
