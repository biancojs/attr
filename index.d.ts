export declare function get<T extends Element>(el: T, prop: string): string | null
export declare function get<T extends Element>(el: T, prop: string[]): string[] | null
export declare function get<T extends Element>(el: T[], prop: string): string[] | null
export declare function get<T extends Element>(el: T[], prop: string[]): string[][] | null

export declare function set<T extends Element>(el: T, prop: string): T
export declare function set<T extends Element>(el: T, prop: string[]): T
export declare function set<T extends Element>(el: T[], prop: string): T[]
export declare function set<T extends Element>(el: T[], prop: string[]): T[]

export declare function remove<T extends Element>(el: T, prop: string): void
export declare function remove<T extends Element>(el: T, prop: string[]): void
export declare function remove<T extends Element>(el: T[], prop: string): void
export declare function remove<T extends Element>(el: T[], prop: string[]): void

export declare function has<T extends Element>(el: T, prop: string): boolean | null
export declare function has<T extends Element>(el: T, prop: string[]): boolean[] | null
export declare function has<T extends Element>(el: T[], prop: string): boolean[] | null
export declare function has<T extends Element>(el: T[], prop: string[]): boolean[][] | null

export default {
  get,
  set,
  remove,
  has
}



