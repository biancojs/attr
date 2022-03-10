export declare function get<T extends Element>(el: T, attr: string): string | null
export declare function get<T extends Element>(el: T, attrs: string[]): string[] | null
export declare function get<T extends Element>(els: T[], attr: string): string[] | null
export declare function get<T extends Element>(els: T[], attrs: string[]): string[][] | null

export declare function set<T extends Element>(el: T, attr: string, val: unknown): T
export declare function set<T extends Element>(el: T, attrs: Record<string, unknown>): T
export declare function set<T extends Element>(els: T[], attr: string, val: unknown): T[]
export declare function set<T extends Element>(els: T[], attrs: Record<string, unknown>): T[]

export declare function remove<T extends Element>(el: T, attr: string | string[]): void
export declare function remove<T extends Element>(els: T[], attr: string | string[]): void

export declare function has<T extends Element>(el: T, attr: string): boolean | null
export declare function has<T extends Element>(el: T, attrs: string[]): boolean[] | null
export declare function has<T extends Element>(els: T[], attr: string): boolean[] | null
export declare function has<T extends Element>(els: T[], attrs: string[]): boolean[][] | null

export default {
  get,
  set,
  remove,
  has
}



