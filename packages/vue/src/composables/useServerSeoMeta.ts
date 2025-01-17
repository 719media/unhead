import type { ActiveHeadEntry, HeadEntryOptions } from '@unhead/schema'
import type { UseSeoMetaInput } from '../types'
import { useSeoMeta } from './useSeoMeta'

export function useServerSeoMeta(input: UseSeoMetaInput, options?: HeadEntryOptions): ActiveHeadEntry<any> | void {
  return useSeoMeta(input, { ...(options || {}), mode: 'server' })
}
