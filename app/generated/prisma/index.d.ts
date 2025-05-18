
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model NotificationBox
 * 
 */
export type NotificationBox = $Result.DefaultSelection<Prisma.$NotificationBoxPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model BookMark
 * 
 */
export type BookMark = $Result.DefaultSelection<Prisma.$BookMarkPayload>
/**
 * Model BlogLike
 * 
 */
export type BlogLike = $Result.DefaultSelection<Prisma.$BlogLikePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model BlogPostImage
 * 
 */
export type BlogPostImage = $Result.DefaultSelection<Prisma.$BlogPostImagePayload>
/**
 * Model Subscribe
 * 
 */
export type Subscribe = $Result.DefaultSelection<Prisma.$SubscribePayload>
/**
 * Model Provider
 * 
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model UserProvider
 * 
 */
export type UserProvider = $Result.DefaultSelection<Prisma.$UserProviderPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationBox`: Exposes CRUD operations for the **NotificationBox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationBoxes
    * const notificationBoxes = await prisma.notificationBox.findMany()
    * ```
    */
  get notificationBox(): Prisma.NotificationBoxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookMark`: Exposes CRUD operations for the **BookMark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookMarks
    * const bookMarks = await prisma.bookMark.findMany()
    * ```
    */
  get bookMark(): Prisma.BookMarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogLike`: Exposes CRUD operations for the **BlogLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogLikes
    * const blogLikes = await prisma.blogLike.findMany()
    * ```
    */
  get blogLike(): Prisma.BlogLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPostImage`: Exposes CRUD operations for the **BlogPostImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPostImages
    * const blogPostImages = await prisma.blogPostImage.findMany()
    * ```
    */
  get blogPostImage(): Prisma.BlogPostImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscribe`: Exposes CRUD operations for the **Subscribe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscribes
    * const subscribes = await prisma.subscribe.findMany()
    * ```
    */
  get subscribe(): Prisma.SubscribeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProvider`: Exposes CRUD operations for the **UserProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProviders
    * const userProviders = await prisma.userProvider.findMany()
    * ```
    */
  get userProvider(): Prisma.UserProviderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    BlogPost: 'BlogPost',
    NotificationBox: 'NotificationBox',
    Notification: 'Notification',
    BookMark: 'BookMark',
    BlogLike: 'BlogLike',
    Comment: 'Comment',
    BlogPostImage: 'BlogPostImage',
    Subscribe: 'Subscribe',
    Provider: 'Provider',
    UserProvider: 'UserProvider'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "blogPost" | "notificationBox" | "notification" | "bookMark" | "blogLike" | "comment" | "blogPostImage" | "subscribe" | "provider" | "userProvider"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      NotificationBox: {
        payload: Prisma.$NotificationBoxPayload<ExtArgs>
        fields: Prisma.NotificationBoxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationBoxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationBoxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationBoxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationBoxPayload>
          }
          findFirst: {
            args: Prisma.NotificationBoxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationBoxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationBoxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationBoxPayload>
          }
          findMany: {
            args: Prisma.NotificationBoxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationBoxPayload>[]
          }
          create: {
            args: Prisma.NotificationBoxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationBoxPayload>
          }
          createMany: {
            args: Prisma.NotificationBoxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationBoxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationBoxPayload>[]
          }
          delete: {
            args: Prisma.NotificationBoxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationBoxPayload>
          }
          update: {
            args: Prisma.NotificationBoxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationBoxPayload>
          }
          deleteMany: {
            args: Prisma.NotificationBoxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationBoxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationBoxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationBoxPayload>[]
          }
          upsert: {
            args: Prisma.NotificationBoxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationBoxPayload>
          }
          aggregate: {
            args: Prisma.NotificationBoxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationBox>
          }
          groupBy: {
            args: Prisma.NotificationBoxGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationBoxGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationBoxCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationBoxCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      BookMark: {
        payload: Prisma.$BookMarkPayload<ExtArgs>
        fields: Prisma.BookMarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookMarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookMarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          findFirst: {
            args: Prisma.BookMarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookMarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          findMany: {
            args: Prisma.BookMarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>[]
          }
          create: {
            args: Prisma.BookMarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          createMany: {
            args: Prisma.BookMarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookMarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>[]
          }
          delete: {
            args: Prisma.BookMarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          update: {
            args: Prisma.BookMarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          deleteMany: {
            args: Prisma.BookMarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookMarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookMarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>[]
          }
          upsert: {
            args: Prisma.BookMarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          aggregate: {
            args: Prisma.BookMarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookMark>
          }
          groupBy: {
            args: Prisma.BookMarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookMarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookMarkCountArgs<ExtArgs>
            result: $Utils.Optional<BookMarkCountAggregateOutputType> | number
          }
        }
      }
      BlogLike: {
        payload: Prisma.$BlogLikePayload<ExtArgs>
        fields: Prisma.BlogLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          findFirst: {
            args: Prisma.BlogLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          findMany: {
            args: Prisma.BlogLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>[]
          }
          create: {
            args: Prisma.BlogLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          createMany: {
            args: Prisma.BlogLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>[]
          }
          delete: {
            args: Prisma.BlogLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          update: {
            args: Prisma.BlogLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          deleteMany: {
            args: Prisma.BlogLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>[]
          }
          upsert: {
            args: Prisma.BlogLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          aggregate: {
            args: Prisma.BlogLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogLike>
          }
          groupBy: {
            args: Prisma.BlogLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogLikeCountArgs<ExtArgs>
            result: $Utils.Optional<BlogLikeCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      BlogPostImage: {
        payload: Prisma.$BlogPostImagePayload<ExtArgs>
        fields: Prisma.BlogPostImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostImagePayload>
          }
          findFirst: {
            args: Prisma.BlogPostImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostImagePayload>
          }
          findMany: {
            args: Prisma.BlogPostImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostImagePayload>[]
          }
          create: {
            args: Prisma.BlogPostImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostImagePayload>
          }
          createMany: {
            args: Prisma.BlogPostImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostImagePayload>[]
          }
          delete: {
            args: Prisma.BlogPostImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostImagePayload>
          }
          update: {
            args: Prisma.BlogPostImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostImagePayload>
          }
          deleteMany: {
            args: Prisma.BlogPostImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostImagePayload>[]
          }
          upsert: {
            args: Prisma.BlogPostImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostImagePayload>
          }
          aggregate: {
            args: Prisma.BlogPostImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPostImage>
          }
          groupBy: {
            args: Prisma.BlogPostImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostImageCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostImageCountAggregateOutputType> | number
          }
        }
      }
      Subscribe: {
        payload: Prisma.$SubscribePayload<ExtArgs>
        fields: Prisma.SubscribeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscribeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscribeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          findFirst: {
            args: Prisma.SubscribeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscribeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          findMany: {
            args: Prisma.SubscribeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>[]
          }
          create: {
            args: Prisma.SubscribeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          createMany: {
            args: Prisma.SubscribeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscribeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>[]
          }
          delete: {
            args: Prisma.SubscribeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          update: {
            args: Prisma.SubscribeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          deleteMany: {
            args: Prisma.SubscribeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscribeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscribeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>[]
          }
          upsert: {
            args: Prisma.SubscribeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          aggregate: {
            args: Prisma.SubscribeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscribe>
          }
          groupBy: {
            args: Prisma.SubscribeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscribeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscribeCountArgs<ExtArgs>
            result: $Utils.Optional<SubscribeCountAggregateOutputType> | number
          }
        }
      }
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      UserProvider: {
        payload: Prisma.$UserProviderPayload<ExtArgs>
        fields: Prisma.UserProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          findFirst: {
            args: Prisma.UserProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          findMany: {
            args: Prisma.UserProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>[]
          }
          create: {
            args: Prisma.UserProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          createMany: {
            args: Prisma.UserProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>[]
          }
          delete: {
            args: Prisma.UserProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          update: {
            args: Prisma.UserProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          deleteMany: {
            args: Prisma.UserProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>[]
          }
          upsert: {
            args: Prisma.UserProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          aggregate: {
            args: Prisma.UserProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProvider>
          }
          groupBy: {
            args: Prisma.UserProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProviderCountArgs<ExtArgs>
            result: $Utils.Optional<UserProviderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    blogPost?: BlogPostOmit
    notificationBox?: NotificationBoxOmit
    notification?: NotificationOmit
    bookMark?: BookMarkOmit
    blogLike?: BlogLikeOmit
    comment?: CommentOmit
    blogPostImage?: BlogPostImageOmit
    subscribe?: SubscribeOmit
    provider?: ProviderOmit
    userProvider?: UserProviderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    likes: number
    blogPost: number
    bookMark: number
    comments: number
    notificationBox: number
    userProvider: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    blogPost?: boolean | UserCountOutputTypeCountBlogPostArgs
    bookMark?: boolean | UserCountOutputTypeCountBookMarkArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    notificationBox?: boolean | UserCountOutputTypeCountNotificationBoxArgs
    userProvider?: boolean | UserCountOutputTypeCountUserProviderArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookMarkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationBoxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationBoxWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProviderWhereInput
  }


  /**
   * Count Type BlogPostCountOutputType
   */

  export type BlogPostCountOutputType = {
    likes: number
    blogPostImages: number
    bookMark: number
    comments: number
    notification: number
  }

  export type BlogPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | BlogPostCountOutputTypeCountLikesArgs
    blogPostImages?: boolean | BlogPostCountOutputTypeCountBlogPostImagesArgs
    bookMark?: boolean | BlogPostCountOutputTypeCountBookMarkArgs
    comments?: boolean | BlogPostCountOutputTypeCountCommentsArgs
    notification?: boolean | BlogPostCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     */
    select?: BlogPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogLikeWhereInput
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountBlogPostImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostImageWhereInput
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountBookMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookMarkWhereInput
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type NotificationBoxCountOutputType
   */

  export type NotificationBoxCountOutputType = {
    notification: number
  }

  export type NotificationBoxCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationBoxCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * NotificationBoxCountOutputType without action
   */
  export type NotificationBoxCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBoxCountOutputType
     */
    select?: NotificationBoxCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationBoxCountOutputType without action
   */
  export type NotificationBoxCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    userProvider: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProvider?: boolean | ProviderCountOutputTypeCountUserProviderArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountUserProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProviderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nickname: string | null
    email: string | null
    profileImage: string | null
    introduction: string | null
    backgroundImg: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nickname: string | null
    email: string | null
    profileImage: string | null
    introduction: string | null
    backgroundImg: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nickname: number
    email: number
    profileImage: number
    introduction: number
    backgroundImg: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    profileImage?: true
    introduction?: true
    backgroundImg?: true
    createdAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    profileImage?: true
    introduction?: true
    backgroundImg?: true
    createdAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    profileImage?: true
    introduction?: true
    backgroundImg?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nickname: string
    email: string
    profileImage: string | null
    introduction: string | null
    backgroundImg: string | null
    createdAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    email?: boolean
    profileImage?: boolean
    introduction?: boolean
    backgroundImg?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    likes?: boolean | User$likesArgs<ExtArgs>
    blogPost?: boolean | User$blogPostArgs<ExtArgs>
    bookMark?: boolean | User$bookMarkArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    notificationBox?: boolean | User$notificationBoxArgs<ExtArgs>
    userProvider?: boolean | User$userProviderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    email?: boolean
    profileImage?: boolean
    introduction?: boolean
    backgroundImg?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    email?: boolean
    profileImage?: boolean
    introduction?: boolean
    backgroundImg?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nickname?: boolean
    email?: boolean
    profileImage?: boolean
    introduction?: boolean
    backgroundImg?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "email" | "profileImage" | "introduction" | "backgroundImg" | "createdAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | User$likesArgs<ExtArgs>
    blogPost?: boolean | User$blogPostArgs<ExtArgs>
    bookMark?: boolean | User$bookMarkArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    notificationBox?: boolean | User$notificationBoxArgs<ExtArgs>
    userProvider?: boolean | User$userProviderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      likes: Prisma.$BlogLikePayload<ExtArgs>[]
      blogPost: Prisma.$BlogPostPayload<ExtArgs>[]
      bookMark: Prisma.$BookMarkPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      notificationBox: Prisma.$NotificationBoxPayload<ExtArgs>[]
      userProvider: Prisma.$UserProviderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nickname: string
      email: string
      profileImage: string | null
      introduction: string | null
      backgroundImg: string | null
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogPost<T extends User$blogPostArgs<ExtArgs> = {}>(args?: Subset<T, User$blogPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookMark<T extends User$bookMarkArgs<ExtArgs> = {}>(args?: Subset<T, User$bookMarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationBox<T extends User$notificationBoxArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationBoxArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProvider<T extends User$userProviderArgs<ExtArgs> = {}>(args?: Subset<T, User$userProviderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly introduction: FieldRef<"User", 'String'>
    readonly backgroundImg: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    where?: BlogLikeWhereInput
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    cursor?: BlogLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogLikeScalarFieldEnum | BlogLikeScalarFieldEnum[]
  }

  /**
   * User.blogPost
   */
  export type User$blogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * User.bookMark
   */
  export type User$bookMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    where?: BookMarkWhereInput
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    cursor?: BookMarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookMarkScalarFieldEnum | BookMarkScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.notificationBox
   */
  export type User$notificationBoxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxInclude<ExtArgs> | null
    where?: NotificationBoxWhereInput
    orderBy?: NotificationBoxOrderByWithRelationInput | NotificationBoxOrderByWithRelationInput[]
    cursor?: NotificationBoxWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationBoxScalarFieldEnum | NotificationBoxScalarFieldEnum[]
  }

  /**
   * User.userProvider
   */
  export type User$userProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    where?: UserProviderWhereInput
    orderBy?: UserProviderOrderByWithRelationInput | UserProviderOrderByWithRelationInput[]
    cursor?: UserProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProviderScalarFieldEnum | UserProviderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostAvgAggregateOutputType = {
    id: number | null
  }

  export type BlogPostSumAggregateOutputType = {
    id: number | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    content: string | null
    tag: string | null
    createAt: Date | null
    updateAt: Date | null
    aiSummary: string | null
    isPublic: boolean | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    content: string | null
    tag: string | null
    createAt: Date | null
    updateAt: Date | null
    aiSummary: string | null
    isPublic: boolean | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    tag: number
    createAt: number
    updateAt: number
    aiSummary: number
    isPublic: number
    _all: number
  }


  export type BlogPostAvgAggregateInputType = {
    id?: true
  }

  export type BlogPostSumAggregateInputType = {
    id?: true
  }

  export type BlogPostMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    tag?: true
    createAt?: true
    updateAt?: true
    aiSummary?: true
    isPublic?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    tag?: true
    createAt?: true
    updateAt?: true
    aiSummary?: true
    isPublic?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    tag?: true
    createAt?: true
    updateAt?: true
    aiSummary?: true
    isPublic?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _avg?: BlogPostAvgAggregateInputType
    _sum?: BlogPostSumAggregateInputType
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: number
    userId: string
    title: string
    content: string
    tag: string | null
    createAt: Date
    updateAt: Date
    aiSummary: string
    isPublic: boolean
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    tag?: boolean
    createAt?: boolean
    updateAt?: boolean
    aiSummary?: boolean
    isPublic?: boolean
    likes?: boolean | BlogPost$likesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    blogPostImages?: boolean | BlogPost$blogPostImagesArgs<ExtArgs>
    bookMark?: boolean | BlogPost$bookMarkArgs<ExtArgs>
    comments?: boolean | BlogPost$commentsArgs<ExtArgs>
    notification?: boolean | BlogPost$notificationArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    tag?: boolean
    createAt?: boolean
    updateAt?: boolean
    aiSummary?: boolean
    isPublic?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    tag?: boolean
    createAt?: boolean
    updateAt?: boolean
    aiSummary?: boolean
    isPublic?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    tag?: boolean
    createAt?: boolean
    updateAt?: boolean
    aiSummary?: boolean
    isPublic?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "content" | "tag" | "createAt" | "updateAt" | "aiSummary" | "isPublic", ExtArgs["result"]["blogPost"]>
  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | BlogPost$likesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    blogPostImages?: boolean | BlogPost$blogPostImagesArgs<ExtArgs>
    bookMark?: boolean | BlogPost$bookMarkArgs<ExtArgs>
    comments?: boolean | BlogPost$commentsArgs<ExtArgs>
    notification?: boolean | BlogPost$notificationArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      likes: Prisma.$BlogLikePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      blogPostImages: Prisma.$BlogPostImagePayload<ExtArgs>[]
      bookMark: Prisma.$BookMarkPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      notification: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      title: string
      content: string
      tag: string | null
      createAt: Date
      updateAt: Date
      aiSummary: string
      isPublic: boolean
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likes<T extends BlogPost$likesArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blogPostImages<T extends BlogPost$blogPostImagesArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$blogPostImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookMark<T extends BlogPost$bookMarkArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$bookMarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends BlogPost$commentsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification<T extends BlogPost$notificationArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'Int'>
    readonly userId: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly tag: FieldRef<"BlogPost", 'String'>
    readonly createAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updateAt: FieldRef<"BlogPost", 'DateTime'>
    readonly aiSummary: FieldRef<"BlogPost", 'String'>
    readonly isPublic: FieldRef<"BlogPost", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost.likes
   */
  export type BlogPost$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    where?: BlogLikeWhereInput
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    cursor?: BlogLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogLikeScalarFieldEnum | BlogLikeScalarFieldEnum[]
  }

  /**
   * BlogPost.blogPostImages
   */
  export type BlogPost$blogPostImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageInclude<ExtArgs> | null
    where?: BlogPostImageWhereInput
    orderBy?: BlogPostImageOrderByWithRelationInput | BlogPostImageOrderByWithRelationInput[]
    cursor?: BlogPostImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostImageScalarFieldEnum | BlogPostImageScalarFieldEnum[]
  }

  /**
   * BlogPost.bookMark
   */
  export type BlogPost$bookMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    where?: BookMarkWhereInput
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    cursor?: BookMarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookMarkScalarFieldEnum | BookMarkScalarFieldEnum[]
  }

  /**
   * BlogPost.comments
   */
  export type BlogPost$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * BlogPost.notification
   */
  export type BlogPost$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model NotificationBox
   */

  export type AggregateNotificationBox = {
    _count: NotificationBoxCountAggregateOutputType | null
    _avg: NotificationBoxAvgAggregateOutputType | null
    _sum: NotificationBoxSumAggregateOutputType | null
    _min: NotificationBoxMinAggregateOutputType | null
    _max: NotificationBoxMaxAggregateOutputType | null
  }

  export type NotificationBoxAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationBoxSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationBoxMinAggregateOutputType = {
    id: number | null
    userId: string | null
    isRead: boolean | null
  }

  export type NotificationBoxMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    isRead: boolean | null
  }

  export type NotificationBoxCountAggregateOutputType = {
    id: number
    userId: number
    isRead: number
    _all: number
  }


  export type NotificationBoxAvgAggregateInputType = {
    id?: true
  }

  export type NotificationBoxSumAggregateInputType = {
    id?: true
  }

  export type NotificationBoxMinAggregateInputType = {
    id?: true
    userId?: true
    isRead?: true
  }

  export type NotificationBoxMaxAggregateInputType = {
    id?: true
    userId?: true
    isRead?: true
  }

  export type NotificationBoxCountAggregateInputType = {
    id?: true
    userId?: true
    isRead?: true
    _all?: true
  }

  export type NotificationBoxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationBox to aggregate.
     */
    where?: NotificationBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationBoxes to fetch.
     */
    orderBy?: NotificationBoxOrderByWithRelationInput | NotificationBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationBoxes
    **/
    _count?: true | NotificationBoxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationBoxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationBoxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationBoxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationBoxMaxAggregateInputType
  }

  export type GetNotificationBoxAggregateType<T extends NotificationBoxAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationBox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationBox[P]>
      : GetScalarType<T[P], AggregateNotificationBox[P]>
  }




  export type NotificationBoxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationBoxWhereInput
    orderBy?: NotificationBoxOrderByWithAggregationInput | NotificationBoxOrderByWithAggregationInput[]
    by: NotificationBoxScalarFieldEnum[] | NotificationBoxScalarFieldEnum
    having?: NotificationBoxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationBoxCountAggregateInputType | true
    _avg?: NotificationBoxAvgAggregateInputType
    _sum?: NotificationBoxSumAggregateInputType
    _min?: NotificationBoxMinAggregateInputType
    _max?: NotificationBoxMaxAggregateInputType
  }

  export type NotificationBoxGroupByOutputType = {
    id: number
    userId: string
    isRead: boolean
    _count: NotificationBoxCountAggregateOutputType | null
    _avg: NotificationBoxAvgAggregateOutputType | null
    _sum: NotificationBoxSumAggregateOutputType | null
    _min: NotificationBoxMinAggregateOutputType | null
    _max: NotificationBoxMaxAggregateOutputType | null
  }

  type GetNotificationBoxGroupByPayload<T extends NotificationBoxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationBoxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationBoxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationBoxGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationBoxGroupByOutputType[P]>
        }
      >
    >


  export type NotificationBoxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isRead?: boolean
    notification?: boolean | NotificationBox$notificationArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | NotificationBoxCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationBox"]>

  export type NotificationBoxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isRead?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationBox"]>

  export type NotificationBoxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isRead?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationBox"]>

  export type NotificationBoxSelectScalar = {
    id?: boolean
    userId?: boolean
    isRead?: boolean
  }

  export type NotificationBoxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "isRead", ExtArgs["result"]["notificationBox"]>
  export type NotificationBoxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationBox$notificationArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | NotificationBoxCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotificationBoxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationBoxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationBoxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationBox"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      isRead: boolean
    }, ExtArgs["result"]["notificationBox"]>
    composites: {}
  }

  type NotificationBoxGetPayload<S extends boolean | null | undefined | NotificationBoxDefaultArgs> = $Result.GetResult<Prisma.$NotificationBoxPayload, S>

  type NotificationBoxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationBoxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationBoxCountAggregateInputType | true
    }

  export interface NotificationBoxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationBox'], meta: { name: 'NotificationBox' } }
    /**
     * Find zero or one NotificationBox that matches the filter.
     * @param {NotificationBoxFindUniqueArgs} args - Arguments to find a NotificationBox
     * @example
     * // Get one NotificationBox
     * const notificationBox = await prisma.notificationBox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationBoxFindUniqueArgs>(args: SelectSubset<T, NotificationBoxFindUniqueArgs<ExtArgs>>): Prisma__NotificationBoxClient<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationBox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationBoxFindUniqueOrThrowArgs} args - Arguments to find a NotificationBox
     * @example
     * // Get one NotificationBox
     * const notificationBox = await prisma.notificationBox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationBoxFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationBoxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationBoxClient<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationBox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationBoxFindFirstArgs} args - Arguments to find a NotificationBox
     * @example
     * // Get one NotificationBox
     * const notificationBox = await prisma.notificationBox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationBoxFindFirstArgs>(args?: SelectSubset<T, NotificationBoxFindFirstArgs<ExtArgs>>): Prisma__NotificationBoxClient<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationBox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationBoxFindFirstOrThrowArgs} args - Arguments to find a NotificationBox
     * @example
     * // Get one NotificationBox
     * const notificationBox = await prisma.notificationBox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationBoxFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationBoxFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationBoxClient<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationBoxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationBoxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationBoxes
     * const notificationBoxes = await prisma.notificationBox.findMany()
     * 
     * // Get first 10 NotificationBoxes
     * const notificationBoxes = await prisma.notificationBox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationBoxWithIdOnly = await prisma.notificationBox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationBoxFindManyArgs>(args?: SelectSubset<T, NotificationBoxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationBox.
     * @param {NotificationBoxCreateArgs} args - Arguments to create a NotificationBox.
     * @example
     * // Create one NotificationBox
     * const NotificationBox = await prisma.notificationBox.create({
     *   data: {
     *     // ... data to create a NotificationBox
     *   }
     * })
     * 
     */
    create<T extends NotificationBoxCreateArgs>(args: SelectSubset<T, NotificationBoxCreateArgs<ExtArgs>>): Prisma__NotificationBoxClient<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationBoxes.
     * @param {NotificationBoxCreateManyArgs} args - Arguments to create many NotificationBoxes.
     * @example
     * // Create many NotificationBoxes
     * const notificationBox = await prisma.notificationBox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationBoxCreateManyArgs>(args?: SelectSubset<T, NotificationBoxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationBoxes and returns the data saved in the database.
     * @param {NotificationBoxCreateManyAndReturnArgs} args - Arguments to create many NotificationBoxes.
     * @example
     * // Create many NotificationBoxes
     * const notificationBox = await prisma.notificationBox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationBoxes and only return the `id`
     * const notificationBoxWithIdOnly = await prisma.notificationBox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationBoxCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationBoxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationBox.
     * @param {NotificationBoxDeleteArgs} args - Arguments to delete one NotificationBox.
     * @example
     * // Delete one NotificationBox
     * const NotificationBox = await prisma.notificationBox.delete({
     *   where: {
     *     // ... filter to delete one NotificationBox
     *   }
     * })
     * 
     */
    delete<T extends NotificationBoxDeleteArgs>(args: SelectSubset<T, NotificationBoxDeleteArgs<ExtArgs>>): Prisma__NotificationBoxClient<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationBox.
     * @param {NotificationBoxUpdateArgs} args - Arguments to update one NotificationBox.
     * @example
     * // Update one NotificationBox
     * const notificationBox = await prisma.notificationBox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationBoxUpdateArgs>(args: SelectSubset<T, NotificationBoxUpdateArgs<ExtArgs>>): Prisma__NotificationBoxClient<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationBoxes.
     * @param {NotificationBoxDeleteManyArgs} args - Arguments to filter NotificationBoxes to delete.
     * @example
     * // Delete a few NotificationBoxes
     * const { count } = await prisma.notificationBox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationBoxDeleteManyArgs>(args?: SelectSubset<T, NotificationBoxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationBoxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationBoxes
     * const notificationBox = await prisma.notificationBox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationBoxUpdateManyArgs>(args: SelectSubset<T, NotificationBoxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationBoxes and returns the data updated in the database.
     * @param {NotificationBoxUpdateManyAndReturnArgs} args - Arguments to update many NotificationBoxes.
     * @example
     * // Update many NotificationBoxes
     * const notificationBox = await prisma.notificationBox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationBoxes and only return the `id`
     * const notificationBoxWithIdOnly = await prisma.notificationBox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationBoxUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationBoxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationBox.
     * @param {NotificationBoxUpsertArgs} args - Arguments to update or create a NotificationBox.
     * @example
     * // Update or create a NotificationBox
     * const notificationBox = await prisma.notificationBox.upsert({
     *   create: {
     *     // ... data to create a NotificationBox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationBox we want to update
     *   }
     * })
     */
    upsert<T extends NotificationBoxUpsertArgs>(args: SelectSubset<T, NotificationBoxUpsertArgs<ExtArgs>>): Prisma__NotificationBoxClient<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationBoxCountArgs} args - Arguments to filter NotificationBoxes to count.
     * @example
     * // Count the number of NotificationBoxes
     * const count = await prisma.notificationBox.count({
     *   where: {
     *     // ... the filter for the NotificationBoxes we want to count
     *   }
     * })
    **/
    count<T extends NotificationBoxCountArgs>(
      args?: Subset<T, NotificationBoxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationBoxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationBoxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationBoxAggregateArgs>(args: Subset<T, NotificationBoxAggregateArgs>): Prisma.PrismaPromise<GetNotificationBoxAggregateType<T>>

    /**
     * Group by NotificationBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationBoxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationBoxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationBoxGroupByArgs['orderBy'] }
        : { orderBy?: NotificationBoxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationBoxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationBoxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationBox model
   */
  readonly fields: NotificationBoxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationBox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationBoxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends NotificationBox$notificationArgs<ExtArgs> = {}>(args?: Subset<T, NotificationBox$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotificationBox model
   */
  interface NotificationBoxFieldRefs {
    readonly id: FieldRef<"NotificationBox", 'Int'>
    readonly userId: FieldRef<"NotificationBox", 'String'>
    readonly isRead: FieldRef<"NotificationBox", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * NotificationBox findUnique
   */
  export type NotificationBoxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxInclude<ExtArgs> | null
    /**
     * Filter, which NotificationBox to fetch.
     */
    where: NotificationBoxWhereUniqueInput
  }

  /**
   * NotificationBox findUniqueOrThrow
   */
  export type NotificationBoxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxInclude<ExtArgs> | null
    /**
     * Filter, which NotificationBox to fetch.
     */
    where: NotificationBoxWhereUniqueInput
  }

  /**
   * NotificationBox findFirst
   */
  export type NotificationBoxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxInclude<ExtArgs> | null
    /**
     * Filter, which NotificationBox to fetch.
     */
    where?: NotificationBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationBoxes to fetch.
     */
    orderBy?: NotificationBoxOrderByWithRelationInput | NotificationBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationBoxes.
     */
    cursor?: NotificationBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationBoxes.
     */
    distinct?: NotificationBoxScalarFieldEnum | NotificationBoxScalarFieldEnum[]
  }

  /**
   * NotificationBox findFirstOrThrow
   */
  export type NotificationBoxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxInclude<ExtArgs> | null
    /**
     * Filter, which NotificationBox to fetch.
     */
    where?: NotificationBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationBoxes to fetch.
     */
    orderBy?: NotificationBoxOrderByWithRelationInput | NotificationBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationBoxes.
     */
    cursor?: NotificationBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationBoxes.
     */
    distinct?: NotificationBoxScalarFieldEnum | NotificationBoxScalarFieldEnum[]
  }

  /**
   * NotificationBox findMany
   */
  export type NotificationBoxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxInclude<ExtArgs> | null
    /**
     * Filter, which NotificationBoxes to fetch.
     */
    where?: NotificationBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationBoxes to fetch.
     */
    orderBy?: NotificationBoxOrderByWithRelationInput | NotificationBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationBoxes.
     */
    cursor?: NotificationBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationBoxes.
     */
    skip?: number
    distinct?: NotificationBoxScalarFieldEnum | NotificationBoxScalarFieldEnum[]
  }

  /**
   * NotificationBox create
   */
  export type NotificationBoxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationBox.
     */
    data: XOR<NotificationBoxCreateInput, NotificationBoxUncheckedCreateInput>
  }

  /**
   * NotificationBox createMany
   */
  export type NotificationBoxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationBoxes.
     */
    data: NotificationBoxCreateManyInput | NotificationBoxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationBox createManyAndReturn
   */
  export type NotificationBoxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationBoxes.
     */
    data: NotificationBoxCreateManyInput | NotificationBoxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationBox update
   */
  export type NotificationBoxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationBox.
     */
    data: XOR<NotificationBoxUpdateInput, NotificationBoxUncheckedUpdateInput>
    /**
     * Choose, which NotificationBox to update.
     */
    where: NotificationBoxWhereUniqueInput
  }

  /**
   * NotificationBox updateMany
   */
  export type NotificationBoxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationBoxes.
     */
    data: XOR<NotificationBoxUpdateManyMutationInput, NotificationBoxUncheckedUpdateManyInput>
    /**
     * Filter which NotificationBoxes to update
     */
    where?: NotificationBoxWhereInput
    /**
     * Limit how many NotificationBoxes to update.
     */
    limit?: number
  }

  /**
   * NotificationBox updateManyAndReturn
   */
  export type NotificationBoxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * The data used to update NotificationBoxes.
     */
    data: XOR<NotificationBoxUpdateManyMutationInput, NotificationBoxUncheckedUpdateManyInput>
    /**
     * Filter which NotificationBoxes to update
     */
    where?: NotificationBoxWhereInput
    /**
     * Limit how many NotificationBoxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationBox upsert
   */
  export type NotificationBoxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationBox to update in case it exists.
     */
    where: NotificationBoxWhereUniqueInput
    /**
     * In case the NotificationBox found by the `where` argument doesn't exist, create a new NotificationBox with this data.
     */
    create: XOR<NotificationBoxCreateInput, NotificationBoxUncheckedCreateInput>
    /**
     * In case the NotificationBox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationBoxUpdateInput, NotificationBoxUncheckedUpdateInput>
  }

  /**
   * NotificationBox delete
   */
  export type NotificationBoxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxInclude<ExtArgs> | null
    /**
     * Filter which NotificationBox to delete.
     */
    where: NotificationBoxWhereUniqueInput
  }

  /**
   * NotificationBox deleteMany
   */
  export type NotificationBoxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationBoxes to delete
     */
    where?: NotificationBoxWhereInput
    /**
     * Limit how many NotificationBoxes to delete.
     */
    limit?: number
  }

  /**
   * NotificationBox.notification
   */
  export type NotificationBox$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * NotificationBox without action
   */
  export type NotificationBoxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationBox
     */
    select?: NotificationBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationBox
     */
    omit?: NotificationBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationBoxInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    blogId: number | null
    notificationBoxId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    blogId: number | null
    notificationBoxId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    blogId: number | null
    notificationBoxId: number | null
    type: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    blogId: number | null
    notificationBoxId: number | null
    type: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    blogId: number
    notificationBoxId: number
    type: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    blogId?: true
    notificationBoxId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    blogId?: true
    notificationBoxId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    blogId?: true
    notificationBoxId?: true
    type?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    blogId?: true
    notificationBoxId?: true
    type?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    blogId?: true
    notificationBoxId?: true
    type?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    blogId: number
    notificationBoxId: number
    type: string
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    notificationBoxId?: boolean
    type?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    notification?: boolean | NotificationBoxDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    notificationBoxId?: boolean
    type?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    notification?: boolean | NotificationBoxDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    notificationBoxId?: boolean
    type?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    notification?: boolean | NotificationBoxDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    blogId?: boolean
    notificationBoxId?: boolean
    type?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogId" | "notificationBoxId" | "type", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    notification?: boolean | NotificationBoxDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    notification?: boolean | NotificationBoxDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    notification?: boolean | NotificationBoxDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      blogs: Prisma.$BlogPostPayload<ExtArgs>
      notification: Prisma.$NotificationBoxPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blogId: number
      notificationBoxId: number
      type: string
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notification<T extends NotificationBoxDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationBoxDefaultArgs<ExtArgs>>): Prisma__NotificationBoxClient<$Result.GetResult<Prisma.$NotificationBoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly blogId: FieldRef<"Notification", 'Int'>
    readonly notificationBoxId: FieldRef<"Notification", 'Int'>
    readonly type: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model BookMark
   */

  export type AggregateBookMark = {
    _count: BookMarkCountAggregateOutputType | null
    _avg: BookMarkAvgAggregateOutputType | null
    _sum: BookMarkSumAggregateOutputType | null
    _min: BookMarkMinAggregateOutputType | null
    _max: BookMarkMaxAggregateOutputType | null
  }

  export type BookMarkAvgAggregateOutputType = {
    id: number | null
    blogId: number | null
  }

  export type BookMarkSumAggregateOutputType = {
    id: number | null
    blogId: number | null
  }

  export type BookMarkMinAggregateOutputType = {
    id: number | null
    blogId: number | null
    userId: string | null
    createAt: Date | null
  }

  export type BookMarkMaxAggregateOutputType = {
    id: number | null
    blogId: number | null
    userId: string | null
    createAt: Date | null
  }

  export type BookMarkCountAggregateOutputType = {
    id: number
    blogId: number
    userId: number
    createAt: number
    _all: number
  }


  export type BookMarkAvgAggregateInputType = {
    id?: true
    blogId?: true
  }

  export type BookMarkSumAggregateInputType = {
    id?: true
    blogId?: true
  }

  export type BookMarkMinAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
    createAt?: true
  }

  export type BookMarkMaxAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
    createAt?: true
  }

  export type BookMarkCountAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
    createAt?: true
    _all?: true
  }

  export type BookMarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookMark to aggregate.
     */
    where?: BookMarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookMarks to fetch.
     */
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookMarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookMarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookMarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookMarks
    **/
    _count?: true | BookMarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookMarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookMarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMarkMaxAggregateInputType
  }

  export type GetBookMarkAggregateType<T extends BookMarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookMark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookMark[P]>
      : GetScalarType<T[P], AggregateBookMark[P]>
  }




  export type BookMarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookMarkWhereInput
    orderBy?: BookMarkOrderByWithAggregationInput | BookMarkOrderByWithAggregationInput[]
    by: BookMarkScalarFieldEnum[] | BookMarkScalarFieldEnum
    having?: BookMarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookMarkCountAggregateInputType | true
    _avg?: BookMarkAvgAggregateInputType
    _sum?: BookMarkSumAggregateInputType
    _min?: BookMarkMinAggregateInputType
    _max?: BookMarkMaxAggregateInputType
  }

  export type BookMarkGroupByOutputType = {
    id: number
    blogId: number
    userId: string
    createAt: Date
    _count: BookMarkCountAggregateOutputType | null
    _avg: BookMarkAvgAggregateOutputType | null
    _sum: BookMarkSumAggregateOutputType | null
    _min: BookMarkMinAggregateOutputType | null
    _max: BookMarkMaxAggregateOutputType | null
  }

  type GetBookMarkGroupByPayload<T extends BookMarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookMarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookMarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookMarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookMarkGroupByOutputType[P]>
        }
      >
    >


  export type BookMarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    createAt?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookMark"]>

  export type BookMarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    createAt?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookMark"]>

  export type BookMarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    createAt?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookMark"]>

  export type BookMarkSelectScalar = {
    id?: boolean
    blogId?: boolean
    userId?: boolean
    createAt?: boolean
  }

  export type BookMarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogId" | "userId" | "createAt", ExtArgs["result"]["bookMark"]>
  export type BookMarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookMarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookMarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookMarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookMark"
    objects: {
      blogs: Prisma.$BlogPostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blogId: number
      userId: string
      createAt: Date
    }, ExtArgs["result"]["bookMark"]>
    composites: {}
  }

  type BookMarkGetPayload<S extends boolean | null | undefined | BookMarkDefaultArgs> = $Result.GetResult<Prisma.$BookMarkPayload, S>

  type BookMarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookMarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookMarkCountAggregateInputType | true
    }

  export interface BookMarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookMark'], meta: { name: 'BookMark' } }
    /**
     * Find zero or one BookMark that matches the filter.
     * @param {BookMarkFindUniqueArgs} args - Arguments to find a BookMark
     * @example
     * // Get one BookMark
     * const bookMark = await prisma.bookMark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookMarkFindUniqueArgs>(args: SelectSubset<T, BookMarkFindUniqueArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookMark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookMarkFindUniqueOrThrowArgs} args - Arguments to find a BookMark
     * @example
     * // Get one BookMark
     * const bookMark = await prisma.bookMark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookMarkFindUniqueOrThrowArgs>(args: SelectSubset<T, BookMarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookMark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkFindFirstArgs} args - Arguments to find a BookMark
     * @example
     * // Get one BookMark
     * const bookMark = await prisma.bookMark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookMarkFindFirstArgs>(args?: SelectSubset<T, BookMarkFindFirstArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookMark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkFindFirstOrThrowArgs} args - Arguments to find a BookMark
     * @example
     * // Get one BookMark
     * const bookMark = await prisma.bookMark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookMarkFindFirstOrThrowArgs>(args?: SelectSubset<T, BookMarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookMarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookMarks
     * const bookMarks = await prisma.bookMark.findMany()
     * 
     * // Get first 10 BookMarks
     * const bookMarks = await prisma.bookMark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookMarkWithIdOnly = await prisma.bookMark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookMarkFindManyArgs>(args?: SelectSubset<T, BookMarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookMark.
     * @param {BookMarkCreateArgs} args - Arguments to create a BookMark.
     * @example
     * // Create one BookMark
     * const BookMark = await prisma.bookMark.create({
     *   data: {
     *     // ... data to create a BookMark
     *   }
     * })
     * 
     */
    create<T extends BookMarkCreateArgs>(args: SelectSubset<T, BookMarkCreateArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookMarks.
     * @param {BookMarkCreateManyArgs} args - Arguments to create many BookMarks.
     * @example
     * // Create many BookMarks
     * const bookMark = await prisma.bookMark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookMarkCreateManyArgs>(args?: SelectSubset<T, BookMarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookMarks and returns the data saved in the database.
     * @param {BookMarkCreateManyAndReturnArgs} args - Arguments to create many BookMarks.
     * @example
     * // Create many BookMarks
     * const bookMark = await prisma.bookMark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookMarks and only return the `id`
     * const bookMarkWithIdOnly = await prisma.bookMark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookMarkCreateManyAndReturnArgs>(args?: SelectSubset<T, BookMarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookMark.
     * @param {BookMarkDeleteArgs} args - Arguments to delete one BookMark.
     * @example
     * // Delete one BookMark
     * const BookMark = await prisma.bookMark.delete({
     *   where: {
     *     // ... filter to delete one BookMark
     *   }
     * })
     * 
     */
    delete<T extends BookMarkDeleteArgs>(args: SelectSubset<T, BookMarkDeleteArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookMark.
     * @param {BookMarkUpdateArgs} args - Arguments to update one BookMark.
     * @example
     * // Update one BookMark
     * const bookMark = await prisma.bookMark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookMarkUpdateArgs>(args: SelectSubset<T, BookMarkUpdateArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookMarks.
     * @param {BookMarkDeleteManyArgs} args - Arguments to filter BookMarks to delete.
     * @example
     * // Delete a few BookMarks
     * const { count } = await prisma.bookMark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookMarkDeleteManyArgs>(args?: SelectSubset<T, BookMarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookMarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookMarks
     * const bookMark = await prisma.bookMark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookMarkUpdateManyArgs>(args: SelectSubset<T, BookMarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookMarks and returns the data updated in the database.
     * @param {BookMarkUpdateManyAndReturnArgs} args - Arguments to update many BookMarks.
     * @example
     * // Update many BookMarks
     * const bookMark = await prisma.bookMark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookMarks and only return the `id`
     * const bookMarkWithIdOnly = await prisma.bookMark.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookMarkUpdateManyAndReturnArgs>(args: SelectSubset<T, BookMarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookMark.
     * @param {BookMarkUpsertArgs} args - Arguments to update or create a BookMark.
     * @example
     * // Update or create a BookMark
     * const bookMark = await prisma.bookMark.upsert({
     *   create: {
     *     // ... data to create a BookMark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookMark we want to update
     *   }
     * })
     */
    upsert<T extends BookMarkUpsertArgs>(args: SelectSubset<T, BookMarkUpsertArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookMarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkCountArgs} args - Arguments to filter BookMarks to count.
     * @example
     * // Count the number of BookMarks
     * const count = await prisma.bookMark.count({
     *   where: {
     *     // ... the filter for the BookMarks we want to count
     *   }
     * })
    **/
    count<T extends BookMarkCountArgs>(
      args?: Subset<T, BookMarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookMarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookMark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookMarkAggregateArgs>(args: Subset<T, BookMarkAggregateArgs>): Prisma.PrismaPromise<GetBookMarkAggregateType<T>>

    /**
     * Group by BookMark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookMarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookMarkGroupByArgs['orderBy'] }
        : { orderBy?: BookMarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookMarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookMarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookMark model
   */
  readonly fields: BookMarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookMark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookMarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookMark model
   */
  interface BookMarkFieldRefs {
    readonly id: FieldRef<"BookMark", 'Int'>
    readonly blogId: FieldRef<"BookMark", 'Int'>
    readonly userId: FieldRef<"BookMark", 'String'>
    readonly createAt: FieldRef<"BookMark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookMark findUnique
   */
  export type BookMarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter, which BookMark to fetch.
     */
    where: BookMarkWhereUniqueInput
  }

  /**
   * BookMark findUniqueOrThrow
   */
  export type BookMarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter, which BookMark to fetch.
     */
    where: BookMarkWhereUniqueInput
  }

  /**
   * BookMark findFirst
   */
  export type BookMarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter, which BookMark to fetch.
     */
    where?: BookMarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookMarks to fetch.
     */
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookMarks.
     */
    cursor?: BookMarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookMarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookMarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookMarks.
     */
    distinct?: BookMarkScalarFieldEnum | BookMarkScalarFieldEnum[]
  }

  /**
   * BookMark findFirstOrThrow
   */
  export type BookMarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter, which BookMark to fetch.
     */
    where?: BookMarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookMarks to fetch.
     */
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookMarks.
     */
    cursor?: BookMarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookMarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookMarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookMarks.
     */
    distinct?: BookMarkScalarFieldEnum | BookMarkScalarFieldEnum[]
  }

  /**
   * BookMark findMany
   */
  export type BookMarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter, which BookMarks to fetch.
     */
    where?: BookMarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookMarks to fetch.
     */
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookMarks.
     */
    cursor?: BookMarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookMarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookMarks.
     */
    skip?: number
    distinct?: BookMarkScalarFieldEnum | BookMarkScalarFieldEnum[]
  }

  /**
   * BookMark create
   */
  export type BookMarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * The data needed to create a BookMark.
     */
    data: XOR<BookMarkCreateInput, BookMarkUncheckedCreateInput>
  }

  /**
   * BookMark createMany
   */
  export type BookMarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookMarks.
     */
    data: BookMarkCreateManyInput | BookMarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookMark createManyAndReturn
   */
  export type BookMarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * The data used to create many BookMarks.
     */
    data: BookMarkCreateManyInput | BookMarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookMark update
   */
  export type BookMarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * The data needed to update a BookMark.
     */
    data: XOR<BookMarkUpdateInput, BookMarkUncheckedUpdateInput>
    /**
     * Choose, which BookMark to update.
     */
    where: BookMarkWhereUniqueInput
  }

  /**
   * BookMark updateMany
   */
  export type BookMarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookMarks.
     */
    data: XOR<BookMarkUpdateManyMutationInput, BookMarkUncheckedUpdateManyInput>
    /**
     * Filter which BookMarks to update
     */
    where?: BookMarkWhereInput
    /**
     * Limit how many BookMarks to update.
     */
    limit?: number
  }

  /**
   * BookMark updateManyAndReturn
   */
  export type BookMarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * The data used to update BookMarks.
     */
    data: XOR<BookMarkUpdateManyMutationInput, BookMarkUncheckedUpdateManyInput>
    /**
     * Filter which BookMarks to update
     */
    where?: BookMarkWhereInput
    /**
     * Limit how many BookMarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookMark upsert
   */
  export type BookMarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * The filter to search for the BookMark to update in case it exists.
     */
    where: BookMarkWhereUniqueInput
    /**
     * In case the BookMark found by the `where` argument doesn't exist, create a new BookMark with this data.
     */
    create: XOR<BookMarkCreateInput, BookMarkUncheckedCreateInput>
    /**
     * In case the BookMark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookMarkUpdateInput, BookMarkUncheckedUpdateInput>
  }

  /**
   * BookMark delete
   */
  export type BookMarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter which BookMark to delete.
     */
    where: BookMarkWhereUniqueInput
  }

  /**
   * BookMark deleteMany
   */
  export type BookMarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookMarks to delete
     */
    where?: BookMarkWhereInput
    /**
     * Limit how many BookMarks to delete.
     */
    limit?: number
  }

  /**
   * BookMark without action
   */
  export type BookMarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
  }


  /**
   * Model BlogLike
   */

  export type AggregateBlogLike = {
    _count: BlogLikeCountAggregateOutputType | null
    _avg: BlogLikeAvgAggregateOutputType | null
    _sum: BlogLikeSumAggregateOutputType | null
    _min: BlogLikeMinAggregateOutputType | null
    _max: BlogLikeMaxAggregateOutputType | null
  }

  export type BlogLikeAvgAggregateOutputType = {
    id: number | null
    blogId: number | null
  }

  export type BlogLikeSumAggregateOutputType = {
    id: number | null
    blogId: number | null
  }

  export type BlogLikeMinAggregateOutputType = {
    id: number | null
    blogId: number | null
    userId: string | null
  }

  export type BlogLikeMaxAggregateOutputType = {
    id: number | null
    blogId: number | null
    userId: string | null
  }

  export type BlogLikeCountAggregateOutputType = {
    id: number
    blogId: number
    userId: number
    _all: number
  }


  export type BlogLikeAvgAggregateInputType = {
    id?: true
    blogId?: true
  }

  export type BlogLikeSumAggregateInputType = {
    id?: true
    blogId?: true
  }

  export type BlogLikeMinAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
  }

  export type BlogLikeMaxAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
  }

  export type BlogLikeCountAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
    _all?: true
  }

  export type BlogLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogLike to aggregate.
     */
    where?: BlogLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogLikes to fetch.
     */
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogLikes
    **/
    _count?: true | BlogLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogLikeMaxAggregateInputType
  }

  export type GetBlogLikeAggregateType<T extends BlogLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogLike[P]>
      : GetScalarType<T[P], AggregateBlogLike[P]>
  }




  export type BlogLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogLikeWhereInput
    orderBy?: BlogLikeOrderByWithAggregationInput | BlogLikeOrderByWithAggregationInput[]
    by: BlogLikeScalarFieldEnum[] | BlogLikeScalarFieldEnum
    having?: BlogLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogLikeCountAggregateInputType | true
    _avg?: BlogLikeAvgAggregateInputType
    _sum?: BlogLikeSumAggregateInputType
    _min?: BlogLikeMinAggregateInputType
    _max?: BlogLikeMaxAggregateInputType
  }

  export type BlogLikeGroupByOutputType = {
    id: number
    blogId: number
    userId: string
    _count: BlogLikeCountAggregateOutputType | null
    _avg: BlogLikeAvgAggregateOutputType | null
    _sum: BlogLikeSumAggregateOutputType | null
    _min: BlogLikeMinAggregateOutputType | null
    _max: BlogLikeMaxAggregateOutputType | null
  }

  type GetBlogLikeGroupByPayload<T extends BlogLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogLikeGroupByOutputType[P]>
            : GetScalarType<T[P], BlogLikeGroupByOutputType[P]>
        }
      >
    >


  export type BlogLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogLike"]>

  export type BlogLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogLike"]>

  export type BlogLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogLike"]>

  export type BlogLikeSelectScalar = {
    id?: boolean
    blogId?: boolean
    userId?: boolean
  }

  export type BlogLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogId" | "userId", ExtArgs["result"]["blogLike"]>
  export type BlogLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogLike"
    objects: {
      blogs: Prisma.$BlogPostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blogId: number
      userId: string
    }, ExtArgs["result"]["blogLike"]>
    composites: {}
  }

  type BlogLikeGetPayload<S extends boolean | null | undefined | BlogLikeDefaultArgs> = $Result.GetResult<Prisma.$BlogLikePayload, S>

  type BlogLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogLikeCountAggregateInputType | true
    }

  export interface BlogLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogLike'], meta: { name: 'BlogLike' } }
    /**
     * Find zero or one BlogLike that matches the filter.
     * @param {BlogLikeFindUniqueArgs} args - Arguments to find a BlogLike
     * @example
     * // Get one BlogLike
     * const blogLike = await prisma.blogLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogLikeFindUniqueArgs>(args: SelectSubset<T, BlogLikeFindUniqueArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogLikeFindUniqueOrThrowArgs} args - Arguments to find a BlogLike
     * @example
     * // Get one BlogLike
     * const blogLike = await prisma.blogLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeFindFirstArgs} args - Arguments to find a BlogLike
     * @example
     * // Get one BlogLike
     * const blogLike = await prisma.blogLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogLikeFindFirstArgs>(args?: SelectSubset<T, BlogLikeFindFirstArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeFindFirstOrThrowArgs} args - Arguments to find a BlogLike
     * @example
     * // Get one BlogLike
     * const blogLike = await prisma.blogLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogLikes
     * const blogLikes = await prisma.blogLike.findMany()
     * 
     * // Get first 10 BlogLikes
     * const blogLikes = await prisma.blogLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogLikeWithIdOnly = await prisma.blogLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogLikeFindManyArgs>(args?: SelectSubset<T, BlogLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogLike.
     * @param {BlogLikeCreateArgs} args - Arguments to create a BlogLike.
     * @example
     * // Create one BlogLike
     * const BlogLike = await prisma.blogLike.create({
     *   data: {
     *     // ... data to create a BlogLike
     *   }
     * })
     * 
     */
    create<T extends BlogLikeCreateArgs>(args: SelectSubset<T, BlogLikeCreateArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogLikes.
     * @param {BlogLikeCreateManyArgs} args - Arguments to create many BlogLikes.
     * @example
     * // Create many BlogLikes
     * const blogLike = await prisma.blogLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogLikeCreateManyArgs>(args?: SelectSubset<T, BlogLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogLikes and returns the data saved in the database.
     * @param {BlogLikeCreateManyAndReturnArgs} args - Arguments to create many BlogLikes.
     * @example
     * // Create many BlogLikes
     * const blogLike = await prisma.blogLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogLikes and only return the `id`
     * const blogLikeWithIdOnly = await prisma.blogLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogLike.
     * @param {BlogLikeDeleteArgs} args - Arguments to delete one BlogLike.
     * @example
     * // Delete one BlogLike
     * const BlogLike = await prisma.blogLike.delete({
     *   where: {
     *     // ... filter to delete one BlogLike
     *   }
     * })
     * 
     */
    delete<T extends BlogLikeDeleteArgs>(args: SelectSubset<T, BlogLikeDeleteArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogLike.
     * @param {BlogLikeUpdateArgs} args - Arguments to update one BlogLike.
     * @example
     * // Update one BlogLike
     * const blogLike = await prisma.blogLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogLikeUpdateArgs>(args: SelectSubset<T, BlogLikeUpdateArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogLikes.
     * @param {BlogLikeDeleteManyArgs} args - Arguments to filter BlogLikes to delete.
     * @example
     * // Delete a few BlogLikes
     * const { count } = await prisma.blogLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogLikeDeleteManyArgs>(args?: SelectSubset<T, BlogLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogLikes
     * const blogLike = await prisma.blogLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogLikeUpdateManyArgs>(args: SelectSubset<T, BlogLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogLikes and returns the data updated in the database.
     * @param {BlogLikeUpdateManyAndReturnArgs} args - Arguments to update many BlogLikes.
     * @example
     * // Update many BlogLikes
     * const blogLike = await prisma.blogLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogLikes and only return the `id`
     * const blogLikeWithIdOnly = await prisma.blogLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogLike.
     * @param {BlogLikeUpsertArgs} args - Arguments to update or create a BlogLike.
     * @example
     * // Update or create a BlogLike
     * const blogLike = await prisma.blogLike.upsert({
     *   create: {
     *     // ... data to create a BlogLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogLike we want to update
     *   }
     * })
     */
    upsert<T extends BlogLikeUpsertArgs>(args: SelectSubset<T, BlogLikeUpsertArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeCountArgs} args - Arguments to filter BlogLikes to count.
     * @example
     * // Count the number of BlogLikes
     * const count = await prisma.blogLike.count({
     *   where: {
     *     // ... the filter for the BlogLikes we want to count
     *   }
     * })
    **/
    count<T extends BlogLikeCountArgs>(
      args?: Subset<T, BlogLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogLikeAggregateArgs>(args: Subset<T, BlogLikeAggregateArgs>): Prisma.PrismaPromise<GetBlogLikeAggregateType<T>>

    /**
     * Group by BlogLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogLikeGroupByArgs['orderBy'] }
        : { orderBy?: BlogLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogLike model
   */
  readonly fields: BlogLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogLike model
   */
  interface BlogLikeFieldRefs {
    readonly id: FieldRef<"BlogLike", 'Int'>
    readonly blogId: FieldRef<"BlogLike", 'Int'>
    readonly userId: FieldRef<"BlogLike", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogLike findUnique
   */
  export type BlogLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter, which BlogLike to fetch.
     */
    where: BlogLikeWhereUniqueInput
  }

  /**
   * BlogLike findUniqueOrThrow
   */
  export type BlogLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter, which BlogLike to fetch.
     */
    where: BlogLikeWhereUniqueInput
  }

  /**
   * BlogLike findFirst
   */
  export type BlogLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter, which BlogLike to fetch.
     */
    where?: BlogLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogLikes to fetch.
     */
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogLikes.
     */
    cursor?: BlogLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogLikes.
     */
    distinct?: BlogLikeScalarFieldEnum | BlogLikeScalarFieldEnum[]
  }

  /**
   * BlogLike findFirstOrThrow
   */
  export type BlogLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter, which BlogLike to fetch.
     */
    where?: BlogLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogLikes to fetch.
     */
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogLikes.
     */
    cursor?: BlogLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogLikes.
     */
    distinct?: BlogLikeScalarFieldEnum | BlogLikeScalarFieldEnum[]
  }

  /**
   * BlogLike findMany
   */
  export type BlogLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter, which BlogLikes to fetch.
     */
    where?: BlogLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogLikes to fetch.
     */
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogLikes.
     */
    cursor?: BlogLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogLikes.
     */
    skip?: number
    distinct?: BlogLikeScalarFieldEnum | BlogLikeScalarFieldEnum[]
  }

  /**
   * BlogLike create
   */
  export type BlogLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogLike.
     */
    data: XOR<BlogLikeCreateInput, BlogLikeUncheckedCreateInput>
  }

  /**
   * BlogLike createMany
   */
  export type BlogLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogLikes.
     */
    data: BlogLikeCreateManyInput | BlogLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogLike createManyAndReturn
   */
  export type BlogLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * The data used to create many BlogLikes.
     */
    data: BlogLikeCreateManyInput | BlogLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogLike update
   */
  export type BlogLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogLike.
     */
    data: XOR<BlogLikeUpdateInput, BlogLikeUncheckedUpdateInput>
    /**
     * Choose, which BlogLike to update.
     */
    where: BlogLikeWhereUniqueInput
  }

  /**
   * BlogLike updateMany
   */
  export type BlogLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogLikes.
     */
    data: XOR<BlogLikeUpdateManyMutationInput, BlogLikeUncheckedUpdateManyInput>
    /**
     * Filter which BlogLikes to update
     */
    where?: BlogLikeWhereInput
    /**
     * Limit how many BlogLikes to update.
     */
    limit?: number
  }

  /**
   * BlogLike updateManyAndReturn
   */
  export type BlogLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * The data used to update BlogLikes.
     */
    data: XOR<BlogLikeUpdateManyMutationInput, BlogLikeUncheckedUpdateManyInput>
    /**
     * Filter which BlogLikes to update
     */
    where?: BlogLikeWhereInput
    /**
     * Limit how many BlogLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogLike upsert
   */
  export type BlogLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogLike to update in case it exists.
     */
    where: BlogLikeWhereUniqueInput
    /**
     * In case the BlogLike found by the `where` argument doesn't exist, create a new BlogLike with this data.
     */
    create: XOR<BlogLikeCreateInput, BlogLikeUncheckedCreateInput>
    /**
     * In case the BlogLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogLikeUpdateInput, BlogLikeUncheckedUpdateInput>
  }

  /**
   * BlogLike delete
   */
  export type BlogLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter which BlogLike to delete.
     */
    where: BlogLikeWhereUniqueInput
  }

  /**
   * BlogLike deleteMany
   */
  export type BlogLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogLikes to delete
     */
    where?: BlogLikeWhereInput
    /**
     * Limit how many BlogLikes to delete.
     */
    limit?: number
  }

  /**
   * BlogLike without action
   */
  export type BlogLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    blogId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    blogId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    blogId: number | null
    userId: string | null
    content: string | null
    createAt: Date | null
    deleteAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    blogId: number | null
    userId: string | null
    content: string | null
    createAt: Date | null
    deleteAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    blogId: number
    userId: number
    content: number
    createAt: number
    deleteAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    blogId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    blogId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
    content?: true
    createAt?: true
    deleteAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
    content?: true
    createAt?: true
    deleteAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
    content?: true
    createAt?: true
    deleteAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    blogId: number
    userId: string
    content: string
    createAt: Date
    deleteAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    content?: boolean
    createAt?: boolean
    deleteAt?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    content?: boolean
    createAt?: boolean
    deleteAt?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    content?: boolean
    createAt?: boolean
    deleteAt?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    blogId?: boolean
    userId?: boolean
    content?: boolean
    createAt?: boolean
    deleteAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogId" | "userId" | "content" | "createAt" | "deleteAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      blogs: Prisma.$BlogPostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blogId: number
      userId: string
      content: string
      createAt: Date
      deleteAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly blogId: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createAt: FieldRef<"Comment", 'DateTime'>
    readonly deleteAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model BlogPostImage
   */

  export type AggregateBlogPostImage = {
    _count: BlogPostImageCountAggregateOutputType | null
    _avg: BlogPostImageAvgAggregateOutputType | null
    _sum: BlogPostImageSumAggregateOutputType | null
    _min: BlogPostImageMinAggregateOutputType | null
    _max: BlogPostImageMaxAggregateOutputType | null
  }

  export type BlogPostImageAvgAggregateOutputType = {
    id: number | null
    blogId: number | null
  }

  export type BlogPostImageSumAggregateOutputType = {
    id: number | null
    blogId: number | null
  }

  export type BlogPostImageMinAggregateOutputType = {
    id: number | null
    blogId: number | null
    image: string | null
  }

  export type BlogPostImageMaxAggregateOutputType = {
    id: number | null
    blogId: number | null
    image: string | null
  }

  export type BlogPostImageCountAggregateOutputType = {
    id: number
    blogId: number
    image: number
    _all: number
  }


  export type BlogPostImageAvgAggregateInputType = {
    id?: true
    blogId?: true
  }

  export type BlogPostImageSumAggregateInputType = {
    id?: true
    blogId?: true
  }

  export type BlogPostImageMinAggregateInputType = {
    id?: true
    blogId?: true
    image?: true
  }

  export type BlogPostImageMaxAggregateInputType = {
    id?: true
    blogId?: true
    image?: true
  }

  export type BlogPostImageCountAggregateInputType = {
    id?: true
    blogId?: true
    image?: true
    _all?: true
  }

  export type BlogPostImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostImage to aggregate.
     */
    where?: BlogPostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostImages to fetch.
     */
    orderBy?: BlogPostImageOrderByWithRelationInput | BlogPostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPostImages
    **/
    _count?: true | BlogPostImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogPostImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogPostImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostImageMaxAggregateInputType
  }

  export type GetBlogPostImageAggregateType<T extends BlogPostImageAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPostImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPostImage[P]>
      : GetScalarType<T[P], AggregateBlogPostImage[P]>
  }




  export type BlogPostImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostImageWhereInput
    orderBy?: BlogPostImageOrderByWithAggregationInput | BlogPostImageOrderByWithAggregationInput[]
    by: BlogPostImageScalarFieldEnum[] | BlogPostImageScalarFieldEnum
    having?: BlogPostImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostImageCountAggregateInputType | true
    _avg?: BlogPostImageAvgAggregateInputType
    _sum?: BlogPostImageSumAggregateInputType
    _min?: BlogPostImageMinAggregateInputType
    _max?: BlogPostImageMaxAggregateInputType
  }

  export type BlogPostImageGroupByOutputType = {
    id: number
    blogId: number
    image: string | null
    _count: BlogPostImageCountAggregateOutputType | null
    _avg: BlogPostImageAvgAggregateOutputType | null
    _sum: BlogPostImageSumAggregateOutputType | null
    _min: BlogPostImageMinAggregateOutputType | null
    _max: BlogPostImageMaxAggregateOutputType | null
  }

  type GetBlogPostImageGroupByPayload<T extends BlogPostImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostImageGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostImageGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    image?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostImage"]>

  export type BlogPostImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    image?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostImage"]>

  export type BlogPostImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    image?: boolean
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostImage"]>

  export type BlogPostImageSelectScalar = {
    id?: boolean
    blogId?: boolean
    image?: boolean
  }

  export type BlogPostImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogId" | "image", ExtArgs["result"]["blogPostImage"]>
  export type BlogPostImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
  }
  export type BlogPostImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
  }
  export type BlogPostImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogPostDefaultArgs<ExtArgs>
  }

  export type $BlogPostImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPostImage"
    objects: {
      blogs: Prisma.$BlogPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blogId: number
      image: string | null
    }, ExtArgs["result"]["blogPostImage"]>
    composites: {}
  }

  type BlogPostImageGetPayload<S extends boolean | null | undefined | BlogPostImageDefaultArgs> = $Result.GetResult<Prisma.$BlogPostImagePayload, S>

  type BlogPostImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostImageCountAggregateInputType | true
    }

  export interface BlogPostImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPostImage'], meta: { name: 'BlogPostImage' } }
    /**
     * Find zero or one BlogPostImage that matches the filter.
     * @param {BlogPostImageFindUniqueArgs} args - Arguments to find a BlogPostImage
     * @example
     * // Get one BlogPostImage
     * const blogPostImage = await prisma.blogPostImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostImageFindUniqueArgs>(args: SelectSubset<T, BlogPostImageFindUniqueArgs<ExtArgs>>): Prisma__BlogPostImageClient<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPostImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostImageFindUniqueOrThrowArgs} args - Arguments to find a BlogPostImage
     * @example
     * // Get one BlogPostImage
     * const blogPostImage = await prisma.blogPostImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostImageFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostImageClient<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostImageFindFirstArgs} args - Arguments to find a BlogPostImage
     * @example
     * // Get one BlogPostImage
     * const blogPostImage = await prisma.blogPostImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostImageFindFirstArgs>(args?: SelectSubset<T, BlogPostImageFindFirstArgs<ExtArgs>>): Prisma__BlogPostImageClient<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostImageFindFirstOrThrowArgs} args - Arguments to find a BlogPostImage
     * @example
     * // Get one BlogPostImage
     * const blogPostImage = await prisma.blogPostImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostImageFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostImageClient<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPostImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPostImages
     * const blogPostImages = await prisma.blogPostImage.findMany()
     * 
     * // Get first 10 BlogPostImages
     * const blogPostImages = await prisma.blogPostImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostImageWithIdOnly = await prisma.blogPostImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostImageFindManyArgs>(args?: SelectSubset<T, BlogPostImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPostImage.
     * @param {BlogPostImageCreateArgs} args - Arguments to create a BlogPostImage.
     * @example
     * // Create one BlogPostImage
     * const BlogPostImage = await prisma.blogPostImage.create({
     *   data: {
     *     // ... data to create a BlogPostImage
     *   }
     * })
     * 
     */
    create<T extends BlogPostImageCreateArgs>(args: SelectSubset<T, BlogPostImageCreateArgs<ExtArgs>>): Prisma__BlogPostImageClient<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPostImages.
     * @param {BlogPostImageCreateManyArgs} args - Arguments to create many BlogPostImages.
     * @example
     * // Create many BlogPostImages
     * const blogPostImage = await prisma.blogPostImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostImageCreateManyArgs>(args?: SelectSubset<T, BlogPostImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPostImages and returns the data saved in the database.
     * @param {BlogPostImageCreateManyAndReturnArgs} args - Arguments to create many BlogPostImages.
     * @example
     * // Create many BlogPostImages
     * const blogPostImage = await prisma.blogPostImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPostImages and only return the `id`
     * const blogPostImageWithIdOnly = await prisma.blogPostImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostImageCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPostImage.
     * @param {BlogPostImageDeleteArgs} args - Arguments to delete one BlogPostImage.
     * @example
     * // Delete one BlogPostImage
     * const BlogPostImage = await prisma.blogPostImage.delete({
     *   where: {
     *     // ... filter to delete one BlogPostImage
     *   }
     * })
     * 
     */
    delete<T extends BlogPostImageDeleteArgs>(args: SelectSubset<T, BlogPostImageDeleteArgs<ExtArgs>>): Prisma__BlogPostImageClient<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPostImage.
     * @param {BlogPostImageUpdateArgs} args - Arguments to update one BlogPostImage.
     * @example
     * // Update one BlogPostImage
     * const blogPostImage = await prisma.blogPostImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostImageUpdateArgs>(args: SelectSubset<T, BlogPostImageUpdateArgs<ExtArgs>>): Prisma__BlogPostImageClient<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPostImages.
     * @param {BlogPostImageDeleteManyArgs} args - Arguments to filter BlogPostImages to delete.
     * @example
     * // Delete a few BlogPostImages
     * const { count } = await prisma.blogPostImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostImageDeleteManyArgs>(args?: SelectSubset<T, BlogPostImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPostImages
     * const blogPostImage = await prisma.blogPostImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostImageUpdateManyArgs>(args: SelectSubset<T, BlogPostImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostImages and returns the data updated in the database.
     * @param {BlogPostImageUpdateManyAndReturnArgs} args - Arguments to update many BlogPostImages.
     * @example
     * // Update many BlogPostImages
     * const blogPostImage = await prisma.blogPostImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPostImages and only return the `id`
     * const blogPostImageWithIdOnly = await prisma.blogPostImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostImageUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPostImage.
     * @param {BlogPostImageUpsertArgs} args - Arguments to update or create a BlogPostImage.
     * @example
     * // Update or create a BlogPostImage
     * const blogPostImage = await prisma.blogPostImage.upsert({
     *   create: {
     *     // ... data to create a BlogPostImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPostImage we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostImageUpsertArgs>(args: SelectSubset<T, BlogPostImageUpsertArgs<ExtArgs>>): Prisma__BlogPostImageClient<$Result.GetResult<Prisma.$BlogPostImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostImageCountArgs} args - Arguments to filter BlogPostImages to count.
     * @example
     * // Count the number of BlogPostImages
     * const count = await prisma.blogPostImage.count({
     *   where: {
     *     // ... the filter for the BlogPostImages we want to count
     *   }
     * })
    **/
    count<T extends BlogPostImageCountArgs>(
      args?: Subset<T, BlogPostImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPostImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostImageAggregateArgs>(args: Subset<T, BlogPostImageAggregateArgs>): Prisma.PrismaPromise<GetBlogPostImageAggregateType<T>>

    /**
     * Group by BlogPostImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostImageGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPostImage model
   */
  readonly fields: BlogPostImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPostImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPostImage model
   */
  interface BlogPostImageFieldRefs {
    readonly id: FieldRef<"BlogPostImage", 'Int'>
    readonly blogId: FieldRef<"BlogPostImage", 'Int'>
    readonly image: FieldRef<"BlogPostImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogPostImage findUnique
   */
  export type BlogPostImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostImage to fetch.
     */
    where: BlogPostImageWhereUniqueInput
  }

  /**
   * BlogPostImage findUniqueOrThrow
   */
  export type BlogPostImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostImage to fetch.
     */
    where: BlogPostImageWhereUniqueInput
  }

  /**
   * BlogPostImage findFirst
   */
  export type BlogPostImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostImage to fetch.
     */
    where?: BlogPostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostImages to fetch.
     */
    orderBy?: BlogPostImageOrderByWithRelationInput | BlogPostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostImages.
     */
    cursor?: BlogPostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostImages.
     */
    distinct?: BlogPostImageScalarFieldEnum | BlogPostImageScalarFieldEnum[]
  }

  /**
   * BlogPostImage findFirstOrThrow
   */
  export type BlogPostImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostImage to fetch.
     */
    where?: BlogPostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostImages to fetch.
     */
    orderBy?: BlogPostImageOrderByWithRelationInput | BlogPostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostImages.
     */
    cursor?: BlogPostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostImages.
     */
    distinct?: BlogPostImageScalarFieldEnum | BlogPostImageScalarFieldEnum[]
  }

  /**
   * BlogPostImage findMany
   */
  export type BlogPostImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostImages to fetch.
     */
    where?: BlogPostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostImages to fetch.
     */
    orderBy?: BlogPostImageOrderByWithRelationInput | BlogPostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPostImages.
     */
    cursor?: BlogPostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostImages.
     */
    skip?: number
    distinct?: BlogPostImageScalarFieldEnum | BlogPostImageScalarFieldEnum[]
  }

  /**
   * BlogPostImage create
   */
  export type BlogPostImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPostImage.
     */
    data: XOR<BlogPostImageCreateInput, BlogPostImageUncheckedCreateInput>
  }

  /**
   * BlogPostImage createMany
   */
  export type BlogPostImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPostImages.
     */
    data: BlogPostImageCreateManyInput | BlogPostImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPostImage createManyAndReturn
   */
  export type BlogPostImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPostImages.
     */
    data: BlogPostImageCreateManyInput | BlogPostImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostImage update
   */
  export type BlogPostImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPostImage.
     */
    data: XOR<BlogPostImageUpdateInput, BlogPostImageUncheckedUpdateInput>
    /**
     * Choose, which BlogPostImage to update.
     */
    where: BlogPostImageWhereUniqueInput
  }

  /**
   * BlogPostImage updateMany
   */
  export type BlogPostImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPostImages.
     */
    data: XOR<BlogPostImageUpdateManyMutationInput, BlogPostImageUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostImages to update
     */
    where?: BlogPostImageWhereInput
    /**
     * Limit how many BlogPostImages to update.
     */
    limit?: number
  }

  /**
   * BlogPostImage updateManyAndReturn
   */
  export type BlogPostImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * The data used to update BlogPostImages.
     */
    data: XOR<BlogPostImageUpdateManyMutationInput, BlogPostImageUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostImages to update
     */
    where?: BlogPostImageWhereInput
    /**
     * Limit how many BlogPostImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostImage upsert
   */
  export type BlogPostImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPostImage to update in case it exists.
     */
    where: BlogPostImageWhereUniqueInput
    /**
     * In case the BlogPostImage found by the `where` argument doesn't exist, create a new BlogPostImage with this data.
     */
    create: XOR<BlogPostImageCreateInput, BlogPostImageUncheckedCreateInput>
    /**
     * In case the BlogPostImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostImageUpdateInput, BlogPostImageUncheckedUpdateInput>
  }

  /**
   * BlogPostImage delete
   */
  export type BlogPostImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageInclude<ExtArgs> | null
    /**
     * Filter which BlogPostImage to delete.
     */
    where: BlogPostImageWhereUniqueInput
  }

  /**
   * BlogPostImage deleteMany
   */
  export type BlogPostImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostImages to delete
     */
    where?: BlogPostImageWhereInput
    /**
     * Limit how many BlogPostImages to delete.
     */
    limit?: number
  }

  /**
   * BlogPostImage without action
   */
  export type BlogPostImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostImage
     */
    select?: BlogPostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostImage
     */
    omit?: BlogPostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostImageInclude<ExtArgs> | null
  }


  /**
   * Model Subscribe
   */

  export type AggregateSubscribe = {
    _count: SubscribeCountAggregateOutputType | null
    _avg: SubscribeAvgAggregateOutputType | null
    _sum: SubscribeSumAggregateOutputType | null
    _min: SubscribeMinAggregateOutputType | null
    _max: SubscribeMaxAggregateOutputType | null
  }

  export type SubscribeAvgAggregateOutputType = {
    id: number | null
  }

  export type SubscribeSumAggregateOutputType = {
    id: number | null
  }

  export type SubscribeMinAggregateOutputType = {
    id: number | null
    requestId: string | null
    responseId: string | null
    createAt: Date | null
  }

  export type SubscribeMaxAggregateOutputType = {
    id: number | null
    requestId: string | null
    responseId: string | null
    createAt: Date | null
  }

  export type SubscribeCountAggregateOutputType = {
    id: number
    requestId: number
    responseId: number
    createAt: number
    _all: number
  }


  export type SubscribeAvgAggregateInputType = {
    id?: true
  }

  export type SubscribeSumAggregateInputType = {
    id?: true
  }

  export type SubscribeMinAggregateInputType = {
    id?: true
    requestId?: true
    responseId?: true
    createAt?: true
  }

  export type SubscribeMaxAggregateInputType = {
    id?: true
    requestId?: true
    responseId?: true
    createAt?: true
  }

  export type SubscribeCountAggregateInputType = {
    id?: true
    requestId?: true
    responseId?: true
    createAt?: true
    _all?: true
  }

  export type SubscribeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscribe to aggregate.
     */
    where?: SubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribes to fetch.
     */
    orderBy?: SubscribeOrderByWithRelationInput | SubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscribes
    **/
    _count?: true | SubscribeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscribeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscribeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscribeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscribeMaxAggregateInputType
  }

  export type GetSubscribeAggregateType<T extends SubscribeAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscribe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscribe[P]>
      : GetScalarType<T[P], AggregateSubscribe[P]>
  }




  export type SubscribeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscribeWhereInput
    orderBy?: SubscribeOrderByWithAggregationInput | SubscribeOrderByWithAggregationInput[]
    by: SubscribeScalarFieldEnum[] | SubscribeScalarFieldEnum
    having?: SubscribeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscribeCountAggregateInputType | true
    _avg?: SubscribeAvgAggregateInputType
    _sum?: SubscribeSumAggregateInputType
    _min?: SubscribeMinAggregateInputType
    _max?: SubscribeMaxAggregateInputType
  }

  export type SubscribeGroupByOutputType = {
    id: number
    requestId: string | null
    responseId: string | null
    createAt: Date
    _count: SubscribeCountAggregateOutputType | null
    _avg: SubscribeAvgAggregateOutputType | null
    _sum: SubscribeSumAggregateOutputType | null
    _min: SubscribeMinAggregateOutputType | null
    _max: SubscribeMaxAggregateOutputType | null
  }

  type GetSubscribeGroupByPayload<T extends SubscribeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscribeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscribeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscribeGroupByOutputType[P]>
            : GetScalarType<T[P], SubscribeGroupByOutputType[P]>
        }
      >
    >


  export type SubscribeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    responseId?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["subscribe"]>

  export type SubscribeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    responseId?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["subscribe"]>

  export type SubscribeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    responseId?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["subscribe"]>

  export type SubscribeSelectScalar = {
    id?: boolean
    requestId?: boolean
    responseId?: boolean
    createAt?: boolean
  }

  export type SubscribeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "responseId" | "createAt", ExtArgs["result"]["subscribe"]>

  export type $SubscribePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscribe"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      requestId: string | null
      responseId: string | null
      createAt: Date
    }, ExtArgs["result"]["subscribe"]>
    composites: {}
  }

  type SubscribeGetPayload<S extends boolean | null | undefined | SubscribeDefaultArgs> = $Result.GetResult<Prisma.$SubscribePayload, S>

  type SubscribeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscribeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscribeCountAggregateInputType | true
    }

  export interface SubscribeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscribe'], meta: { name: 'Subscribe' } }
    /**
     * Find zero or one Subscribe that matches the filter.
     * @param {SubscribeFindUniqueArgs} args - Arguments to find a Subscribe
     * @example
     * // Get one Subscribe
     * const subscribe = await prisma.subscribe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscribeFindUniqueArgs>(args: SelectSubset<T, SubscribeFindUniqueArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscribe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscribeFindUniqueOrThrowArgs} args - Arguments to find a Subscribe
     * @example
     * // Get one Subscribe
     * const subscribe = await prisma.subscribe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscribeFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscribeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscribe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeFindFirstArgs} args - Arguments to find a Subscribe
     * @example
     * // Get one Subscribe
     * const subscribe = await prisma.subscribe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscribeFindFirstArgs>(args?: SelectSubset<T, SubscribeFindFirstArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscribe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeFindFirstOrThrowArgs} args - Arguments to find a Subscribe
     * @example
     * // Get one Subscribe
     * const subscribe = await prisma.subscribe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscribeFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscribeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscribes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscribes
     * const subscribes = await prisma.subscribe.findMany()
     * 
     * // Get first 10 Subscribes
     * const subscribes = await prisma.subscribe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscribeWithIdOnly = await prisma.subscribe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscribeFindManyArgs>(args?: SelectSubset<T, SubscribeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscribe.
     * @param {SubscribeCreateArgs} args - Arguments to create a Subscribe.
     * @example
     * // Create one Subscribe
     * const Subscribe = await prisma.subscribe.create({
     *   data: {
     *     // ... data to create a Subscribe
     *   }
     * })
     * 
     */
    create<T extends SubscribeCreateArgs>(args: SelectSubset<T, SubscribeCreateArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscribes.
     * @param {SubscribeCreateManyArgs} args - Arguments to create many Subscribes.
     * @example
     * // Create many Subscribes
     * const subscribe = await prisma.subscribe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscribeCreateManyArgs>(args?: SelectSubset<T, SubscribeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscribes and returns the data saved in the database.
     * @param {SubscribeCreateManyAndReturnArgs} args - Arguments to create many Subscribes.
     * @example
     * // Create many Subscribes
     * const subscribe = await prisma.subscribe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscribes and only return the `id`
     * const subscribeWithIdOnly = await prisma.subscribe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscribeCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscribeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscribe.
     * @param {SubscribeDeleteArgs} args - Arguments to delete one Subscribe.
     * @example
     * // Delete one Subscribe
     * const Subscribe = await prisma.subscribe.delete({
     *   where: {
     *     // ... filter to delete one Subscribe
     *   }
     * })
     * 
     */
    delete<T extends SubscribeDeleteArgs>(args: SelectSubset<T, SubscribeDeleteArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscribe.
     * @param {SubscribeUpdateArgs} args - Arguments to update one Subscribe.
     * @example
     * // Update one Subscribe
     * const subscribe = await prisma.subscribe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscribeUpdateArgs>(args: SelectSubset<T, SubscribeUpdateArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscribes.
     * @param {SubscribeDeleteManyArgs} args - Arguments to filter Subscribes to delete.
     * @example
     * // Delete a few Subscribes
     * const { count } = await prisma.subscribe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscribeDeleteManyArgs>(args?: SelectSubset<T, SubscribeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscribes
     * const subscribe = await prisma.subscribe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscribeUpdateManyArgs>(args: SelectSubset<T, SubscribeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribes and returns the data updated in the database.
     * @param {SubscribeUpdateManyAndReturnArgs} args - Arguments to update many Subscribes.
     * @example
     * // Update many Subscribes
     * const subscribe = await prisma.subscribe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscribes and only return the `id`
     * const subscribeWithIdOnly = await prisma.subscribe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscribeUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscribeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscribe.
     * @param {SubscribeUpsertArgs} args - Arguments to update or create a Subscribe.
     * @example
     * // Update or create a Subscribe
     * const subscribe = await prisma.subscribe.upsert({
     *   create: {
     *     // ... data to create a Subscribe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscribe we want to update
     *   }
     * })
     */
    upsert<T extends SubscribeUpsertArgs>(args: SelectSubset<T, SubscribeUpsertArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscribes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeCountArgs} args - Arguments to filter Subscribes to count.
     * @example
     * // Count the number of Subscribes
     * const count = await prisma.subscribe.count({
     *   where: {
     *     // ... the filter for the Subscribes we want to count
     *   }
     * })
    **/
    count<T extends SubscribeCountArgs>(
      args?: Subset<T, SubscribeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscribeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscribe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscribeAggregateArgs>(args: Subset<T, SubscribeAggregateArgs>): Prisma.PrismaPromise<GetSubscribeAggregateType<T>>

    /**
     * Group by Subscribe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscribeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscribeGroupByArgs['orderBy'] }
        : { orderBy?: SubscribeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscribeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscribeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscribe model
   */
  readonly fields: SubscribeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscribe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscribeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscribe model
   */
  interface SubscribeFieldRefs {
    readonly id: FieldRef<"Subscribe", 'Int'>
    readonly requestId: FieldRef<"Subscribe", 'String'>
    readonly responseId: FieldRef<"Subscribe", 'String'>
    readonly createAt: FieldRef<"Subscribe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscribe findUnique
   */
  export type SubscribeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Filter, which Subscribe to fetch.
     */
    where: SubscribeWhereUniqueInput
  }

  /**
   * Subscribe findUniqueOrThrow
   */
  export type SubscribeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Filter, which Subscribe to fetch.
     */
    where: SubscribeWhereUniqueInput
  }

  /**
   * Subscribe findFirst
   */
  export type SubscribeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Filter, which Subscribe to fetch.
     */
    where?: SubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribes to fetch.
     */
    orderBy?: SubscribeOrderByWithRelationInput | SubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribes.
     */
    cursor?: SubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribes.
     */
    distinct?: SubscribeScalarFieldEnum | SubscribeScalarFieldEnum[]
  }

  /**
   * Subscribe findFirstOrThrow
   */
  export type SubscribeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Filter, which Subscribe to fetch.
     */
    where?: SubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribes to fetch.
     */
    orderBy?: SubscribeOrderByWithRelationInput | SubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribes.
     */
    cursor?: SubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribes.
     */
    distinct?: SubscribeScalarFieldEnum | SubscribeScalarFieldEnum[]
  }

  /**
   * Subscribe findMany
   */
  export type SubscribeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Filter, which Subscribes to fetch.
     */
    where?: SubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribes to fetch.
     */
    orderBy?: SubscribeOrderByWithRelationInput | SubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscribes.
     */
    cursor?: SubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribes.
     */
    skip?: number
    distinct?: SubscribeScalarFieldEnum | SubscribeScalarFieldEnum[]
  }

  /**
   * Subscribe create
   */
  export type SubscribeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * The data needed to create a Subscribe.
     */
    data?: XOR<SubscribeCreateInput, SubscribeUncheckedCreateInput>
  }

  /**
   * Subscribe createMany
   */
  export type SubscribeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscribes.
     */
    data: SubscribeCreateManyInput | SubscribeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscribe createManyAndReturn
   */
  export type SubscribeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * The data used to create many Subscribes.
     */
    data: SubscribeCreateManyInput | SubscribeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscribe update
   */
  export type SubscribeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * The data needed to update a Subscribe.
     */
    data: XOR<SubscribeUpdateInput, SubscribeUncheckedUpdateInput>
    /**
     * Choose, which Subscribe to update.
     */
    where: SubscribeWhereUniqueInput
  }

  /**
   * Subscribe updateMany
   */
  export type SubscribeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscribes.
     */
    data: XOR<SubscribeUpdateManyMutationInput, SubscribeUncheckedUpdateManyInput>
    /**
     * Filter which Subscribes to update
     */
    where?: SubscribeWhereInput
    /**
     * Limit how many Subscribes to update.
     */
    limit?: number
  }

  /**
   * Subscribe updateManyAndReturn
   */
  export type SubscribeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * The data used to update Subscribes.
     */
    data: XOR<SubscribeUpdateManyMutationInput, SubscribeUncheckedUpdateManyInput>
    /**
     * Filter which Subscribes to update
     */
    where?: SubscribeWhereInput
    /**
     * Limit how many Subscribes to update.
     */
    limit?: number
  }

  /**
   * Subscribe upsert
   */
  export type SubscribeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * The filter to search for the Subscribe to update in case it exists.
     */
    where: SubscribeWhereUniqueInput
    /**
     * In case the Subscribe found by the `where` argument doesn't exist, create a new Subscribe with this data.
     */
    create: XOR<SubscribeCreateInput, SubscribeUncheckedCreateInput>
    /**
     * In case the Subscribe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscribeUpdateInput, SubscribeUncheckedUpdateInput>
  }

  /**
   * Subscribe delete
   */
  export type SubscribeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Filter which Subscribe to delete.
     */
    where: SubscribeWhereUniqueInput
  }

  /**
   * Subscribe deleteMany
   */
  export type SubscribeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscribes to delete
     */
    where?: SubscribeWhereInput
    /**
     * Limit how many Subscribes to delete.
     */
    limit?: number
  }

  /**
   * Subscribe without action
   */
  export type SubscribeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
  }


  /**
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _avg: ProviderAvgAggregateOutputType | null
    _sum: ProviderSumAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderAvgAggregateOutputType = {
    id: number | null
  }

  export type ProviderSumAggregateOutputType = {
    id: number | null
  }

  export type ProviderMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProviderAvgAggregateInputType = {
    id?: true
  }

  export type ProviderSumAggregateInputType = {
    id?: true
  }

  export type ProviderMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _avg?: ProviderAvgAggregateInputType
    _sum?: ProviderSumAggregateInputType
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: number
    name: string
    _count: ProviderCountAggregateOutputType | null
    _avg: ProviderAvgAggregateOutputType | null
    _sum: ProviderSumAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userProvider?: boolean | Provider$userProviderArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["provider"]>
  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProvider?: boolean | Provider$userProviderArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      userProvider: Prisma.$UserProviderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProviderUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userProvider<T extends Provider$userProviderArgs<ExtArgs> = {}>(args?: Subset<T, Provider$userProviderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provider model
   */
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'Int'>
    readonly name: FieldRef<"Provider", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider updateManyAndReturn
   */
  export type ProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to delete.
     */
    limit?: number
  }

  /**
   * Provider.userProvider
   */
  export type Provider$userProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    where?: UserProviderWhereInput
    orderBy?: UserProviderOrderByWithRelationInput | UserProviderOrderByWithRelationInput[]
    cursor?: UserProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProviderScalarFieldEnum | UserProviderScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model UserProvider
   */

  export type AggregateUserProvider = {
    _count: UserProviderCountAggregateOutputType | null
    _avg: UserProviderAvgAggregateOutputType | null
    _sum: UserProviderSumAggregateOutputType | null
    _min: UserProviderMinAggregateOutputType | null
    _max: UserProviderMaxAggregateOutputType | null
  }

  export type UserProviderAvgAggregateOutputType = {
    id: number | null
    providerId: number | null
  }

  export type UserProviderSumAggregateOutputType = {
    id: number | null
    providerId: number | null
  }

  export type UserProviderMinAggregateOutputType = {
    id: number | null
    providerId: number | null
    userId: string | null
  }

  export type UserProviderMaxAggregateOutputType = {
    id: number | null
    providerId: number | null
    userId: string | null
  }

  export type UserProviderCountAggregateOutputType = {
    id: number
    providerId: number
    userId: number
    _all: number
  }


  export type UserProviderAvgAggregateInputType = {
    id?: true
    providerId?: true
  }

  export type UserProviderSumAggregateInputType = {
    id?: true
    providerId?: true
  }

  export type UserProviderMinAggregateInputType = {
    id?: true
    providerId?: true
    userId?: true
  }

  export type UserProviderMaxAggregateInputType = {
    id?: true
    providerId?: true
    userId?: true
  }

  export type UserProviderCountAggregateInputType = {
    id?: true
    providerId?: true
    userId?: true
    _all?: true
  }

  export type UserProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProvider to aggregate.
     */
    where?: UserProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProviders to fetch.
     */
    orderBy?: UserProviderOrderByWithRelationInput | UserProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProviders
    **/
    _count?: true | UserProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProviderMaxAggregateInputType
  }

  export type GetUserProviderAggregateType<T extends UserProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProvider[P]>
      : GetScalarType<T[P], AggregateUserProvider[P]>
  }




  export type UserProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProviderWhereInput
    orderBy?: UserProviderOrderByWithAggregationInput | UserProviderOrderByWithAggregationInput[]
    by: UserProviderScalarFieldEnum[] | UserProviderScalarFieldEnum
    having?: UserProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProviderCountAggregateInputType | true
    _avg?: UserProviderAvgAggregateInputType
    _sum?: UserProviderSumAggregateInputType
    _min?: UserProviderMinAggregateInputType
    _max?: UserProviderMaxAggregateInputType
  }

  export type UserProviderGroupByOutputType = {
    id: number
    providerId: number
    userId: string
    _count: UserProviderCountAggregateOutputType | null
    _avg: UserProviderAvgAggregateOutputType | null
    _sum: UserProviderSumAggregateOutputType | null
    _min: UserProviderMinAggregateOutputType | null
    _max: UserProviderMaxAggregateOutputType | null
  }

  type GetUserProviderGroupByPayload<T extends UserProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProviderGroupByOutputType[P]>
            : GetScalarType<T[P], UserProviderGroupByOutputType[P]>
        }
      >
    >


  export type UserProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    userId?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProvider"]>

  export type UserProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    userId?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProvider"]>

  export type UserProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    userId?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProvider"]>

  export type UserProviderSelectScalar = {
    id?: boolean
    providerId?: boolean
    userId?: boolean
  }

  export type UserProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "userId", ExtArgs["result"]["userProvider"]>
  export type UserProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProvider"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      providerId: number
      userId: string
    }, ExtArgs["result"]["userProvider"]>
    composites: {}
  }

  type UserProviderGetPayload<S extends boolean | null | undefined | UserProviderDefaultArgs> = $Result.GetResult<Prisma.$UserProviderPayload, S>

  type UserProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProviderCountAggregateInputType | true
    }

  export interface UserProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProvider'], meta: { name: 'UserProvider' } }
    /**
     * Find zero or one UserProvider that matches the filter.
     * @param {UserProviderFindUniqueArgs} args - Arguments to find a UserProvider
     * @example
     * // Get one UserProvider
     * const userProvider = await prisma.userProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProviderFindUniqueArgs>(args: SelectSubset<T, UserProviderFindUniqueArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProviderFindUniqueOrThrowArgs} args - Arguments to find a UserProvider
     * @example
     * // Get one UserProvider
     * const userProvider = await prisma.userProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderFindFirstArgs} args - Arguments to find a UserProvider
     * @example
     * // Get one UserProvider
     * const userProvider = await prisma.userProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProviderFindFirstArgs>(args?: SelectSubset<T, UserProviderFindFirstArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderFindFirstOrThrowArgs} args - Arguments to find a UserProvider
     * @example
     * // Get one UserProvider
     * const userProvider = await prisma.userProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProviders
     * const userProviders = await prisma.userProvider.findMany()
     * 
     * // Get first 10 UserProviders
     * const userProviders = await prisma.userProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProviderWithIdOnly = await prisma.userProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProviderFindManyArgs>(args?: SelectSubset<T, UserProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProvider.
     * @param {UserProviderCreateArgs} args - Arguments to create a UserProvider.
     * @example
     * // Create one UserProvider
     * const UserProvider = await prisma.userProvider.create({
     *   data: {
     *     // ... data to create a UserProvider
     *   }
     * })
     * 
     */
    create<T extends UserProviderCreateArgs>(args: SelectSubset<T, UserProviderCreateArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProviders.
     * @param {UserProviderCreateManyArgs} args - Arguments to create many UserProviders.
     * @example
     * // Create many UserProviders
     * const userProvider = await prisma.userProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProviderCreateManyArgs>(args?: SelectSubset<T, UserProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProviders and returns the data saved in the database.
     * @param {UserProviderCreateManyAndReturnArgs} args - Arguments to create many UserProviders.
     * @example
     * // Create many UserProviders
     * const userProvider = await prisma.userProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProviders and only return the `id`
     * const userProviderWithIdOnly = await prisma.userProvider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProvider.
     * @param {UserProviderDeleteArgs} args - Arguments to delete one UserProvider.
     * @example
     * // Delete one UserProvider
     * const UserProvider = await prisma.userProvider.delete({
     *   where: {
     *     // ... filter to delete one UserProvider
     *   }
     * })
     * 
     */
    delete<T extends UserProviderDeleteArgs>(args: SelectSubset<T, UserProviderDeleteArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProvider.
     * @param {UserProviderUpdateArgs} args - Arguments to update one UserProvider.
     * @example
     * // Update one UserProvider
     * const userProvider = await prisma.userProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProviderUpdateArgs>(args: SelectSubset<T, UserProviderUpdateArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProviders.
     * @param {UserProviderDeleteManyArgs} args - Arguments to filter UserProviders to delete.
     * @example
     * // Delete a few UserProviders
     * const { count } = await prisma.userProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProviderDeleteManyArgs>(args?: SelectSubset<T, UserProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProviders
     * const userProvider = await prisma.userProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProviderUpdateManyArgs>(args: SelectSubset<T, UserProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProviders and returns the data updated in the database.
     * @param {UserProviderUpdateManyAndReturnArgs} args - Arguments to update many UserProviders.
     * @example
     * // Update many UserProviders
     * const userProvider = await prisma.userProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProviders and only return the `id`
     * const userProviderWithIdOnly = await prisma.userProvider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProvider.
     * @param {UserProviderUpsertArgs} args - Arguments to update or create a UserProvider.
     * @example
     * // Update or create a UserProvider
     * const userProvider = await prisma.userProvider.upsert({
     *   create: {
     *     // ... data to create a UserProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProvider we want to update
     *   }
     * })
     */
    upsert<T extends UserProviderUpsertArgs>(args: SelectSubset<T, UserProviderUpsertArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderCountArgs} args - Arguments to filter UserProviders to count.
     * @example
     * // Count the number of UserProviders
     * const count = await prisma.userProvider.count({
     *   where: {
     *     // ... the filter for the UserProviders we want to count
     *   }
     * })
    **/
    count<T extends UserProviderCountArgs>(
      args?: Subset<T, UserProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProviderAggregateArgs>(args: Subset<T, UserProviderAggregateArgs>): Prisma.PrismaPromise<GetUserProviderAggregateType<T>>

    /**
     * Group by UserProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProviderGroupByArgs['orderBy'] }
        : { orderBy?: UserProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProvider model
   */
  readonly fields: UserProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProvider model
   */
  interface UserProviderFieldRefs {
    readonly id: FieldRef<"UserProvider", 'Int'>
    readonly providerId: FieldRef<"UserProvider", 'Int'>
    readonly userId: FieldRef<"UserProvider", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserProvider findUnique
   */
  export type UserProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter, which UserProvider to fetch.
     */
    where: UserProviderWhereUniqueInput
  }

  /**
   * UserProvider findUniqueOrThrow
   */
  export type UserProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter, which UserProvider to fetch.
     */
    where: UserProviderWhereUniqueInput
  }

  /**
   * UserProvider findFirst
   */
  export type UserProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter, which UserProvider to fetch.
     */
    where?: UserProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProviders to fetch.
     */
    orderBy?: UserProviderOrderByWithRelationInput | UserProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProviders.
     */
    cursor?: UserProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProviders.
     */
    distinct?: UserProviderScalarFieldEnum | UserProviderScalarFieldEnum[]
  }

  /**
   * UserProvider findFirstOrThrow
   */
  export type UserProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter, which UserProvider to fetch.
     */
    where?: UserProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProviders to fetch.
     */
    orderBy?: UserProviderOrderByWithRelationInput | UserProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProviders.
     */
    cursor?: UserProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProviders.
     */
    distinct?: UserProviderScalarFieldEnum | UserProviderScalarFieldEnum[]
  }

  /**
   * UserProvider findMany
   */
  export type UserProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter, which UserProviders to fetch.
     */
    where?: UserProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProviders to fetch.
     */
    orderBy?: UserProviderOrderByWithRelationInput | UserProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProviders.
     */
    cursor?: UserProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProviders.
     */
    skip?: number
    distinct?: UserProviderScalarFieldEnum | UserProviderScalarFieldEnum[]
  }

  /**
   * UserProvider create
   */
  export type UserProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProvider.
     */
    data: XOR<UserProviderCreateInput, UserProviderUncheckedCreateInput>
  }

  /**
   * UserProvider createMany
   */
  export type UserProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProviders.
     */
    data: UserProviderCreateManyInput | UserProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProvider createManyAndReturn
   */
  export type UserProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * The data used to create many UserProviders.
     */
    data: UserProviderCreateManyInput | UserProviderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProvider update
   */
  export type UserProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProvider.
     */
    data: XOR<UserProviderUpdateInput, UserProviderUncheckedUpdateInput>
    /**
     * Choose, which UserProvider to update.
     */
    where: UserProviderWhereUniqueInput
  }

  /**
   * UserProvider updateMany
   */
  export type UserProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProviders.
     */
    data: XOR<UserProviderUpdateManyMutationInput, UserProviderUncheckedUpdateManyInput>
    /**
     * Filter which UserProviders to update
     */
    where?: UserProviderWhereInput
    /**
     * Limit how many UserProviders to update.
     */
    limit?: number
  }

  /**
   * UserProvider updateManyAndReturn
   */
  export type UserProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * The data used to update UserProviders.
     */
    data: XOR<UserProviderUpdateManyMutationInput, UserProviderUncheckedUpdateManyInput>
    /**
     * Filter which UserProviders to update
     */
    where?: UserProviderWhereInput
    /**
     * Limit how many UserProviders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProvider upsert
   */
  export type UserProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProvider to update in case it exists.
     */
    where: UserProviderWhereUniqueInput
    /**
     * In case the UserProvider found by the `where` argument doesn't exist, create a new UserProvider with this data.
     */
    create: XOR<UserProviderCreateInput, UserProviderUncheckedCreateInput>
    /**
     * In case the UserProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProviderUpdateInput, UserProviderUncheckedUpdateInput>
  }

  /**
   * UserProvider delete
   */
  export type UserProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter which UserProvider to delete.
     */
    where: UserProviderWhereUniqueInput
  }

  /**
   * UserProvider deleteMany
   */
  export type UserProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProviders to delete
     */
    where?: UserProviderWhereInput
    /**
     * Limit how many UserProviders to delete.
     */
    limit?: number
  }

  /**
   * UserProvider without action
   */
  export type UserProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    email: 'email',
    profileImage: 'profileImage',
    introduction: 'introduction',
    backgroundImg: 'backgroundImg',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    tag: 'tag',
    createAt: 'createAt',
    updateAt: 'updateAt',
    aiSummary: 'aiSummary',
    isPublic: 'isPublic'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const NotificationBoxScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    isRead: 'isRead'
  };

  export type NotificationBoxScalarFieldEnum = (typeof NotificationBoxScalarFieldEnum)[keyof typeof NotificationBoxScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    notificationBoxId: 'notificationBoxId',
    type: 'type'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const BookMarkScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    userId: 'userId',
    createAt: 'createAt'
  };

  export type BookMarkScalarFieldEnum = (typeof BookMarkScalarFieldEnum)[keyof typeof BookMarkScalarFieldEnum]


  export const BlogLikeScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    userId: 'userId'
  };

  export type BlogLikeScalarFieldEnum = (typeof BlogLikeScalarFieldEnum)[keyof typeof BlogLikeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    userId: 'userId',
    content: 'content',
    createAt: 'createAt',
    deleteAt: 'deleteAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const BlogPostImageScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    image: 'image'
  };

  export type BlogPostImageScalarFieldEnum = (typeof BlogPostImageScalarFieldEnum)[keyof typeof BlogPostImageScalarFieldEnum]


  export const SubscribeScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    responseId: 'responseId',
    createAt: 'createAt'
  };

  export type SubscribeScalarFieldEnum = (typeof SubscribeScalarFieldEnum)[keyof typeof SubscribeScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const UserProviderScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    userId: 'userId'
  };

  export type UserProviderScalarFieldEnum = (typeof UserProviderScalarFieldEnum)[keyof typeof UserProviderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    introduction?: StringNullableFilter<"User"> | string | null
    backgroundImg?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    likes?: BlogLikeListRelationFilter
    blogPost?: BlogPostListRelationFilter
    bookMark?: BookMarkListRelationFilter
    comments?: CommentListRelationFilter
    notificationBox?: NotificationBoxListRelationFilter
    userProvider?: UserProviderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    introduction?: SortOrderInput | SortOrder
    backgroundImg?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    likes?: BlogLikeOrderByRelationAggregateInput
    blogPost?: BlogPostOrderByRelationAggregateInput
    bookMark?: BookMarkOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    notificationBox?: NotificationBoxOrderByRelationAggregateInput
    userProvider?: UserProviderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nickname?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    introduction?: StringNullableFilter<"User"> | string | null
    backgroundImg?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    likes?: BlogLikeListRelationFilter
    blogPost?: BlogPostListRelationFilter
    bookMark?: BookMarkListRelationFilter
    comments?: CommentListRelationFilter
    notificationBox?: NotificationBoxListRelationFilter
    userProvider?: UserProviderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    introduction?: SortOrderInput | SortOrder
    backgroundImg?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    introduction?: StringNullableWithAggregatesFilter<"User"> | string | null
    backgroundImg?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: IntFilter<"BlogPost"> | number
    userId?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    tag?: StringNullableFilter<"BlogPost"> | string | null
    createAt?: DateTimeFilter<"BlogPost"> | Date | string
    updateAt?: DateTimeFilter<"BlogPost"> | Date | string
    aiSummary?: StringFilter<"BlogPost"> | string
    isPublic?: BoolFilter<"BlogPost"> | boolean
    likes?: BlogLikeListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blogPostImages?: BlogPostImageListRelationFilter
    bookMark?: BookMarkListRelationFilter
    comments?: CommentListRelationFilter
    notification?: NotificationListRelationFilter
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tag?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    aiSummary?: SortOrder
    isPublic?: SortOrder
    likes?: BlogLikeOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    blogPostImages?: BlogPostImageOrderByRelationAggregateInput
    bookMark?: BookMarkOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    notification?: NotificationOrderByRelationAggregateInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    userId?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    tag?: StringNullableFilter<"BlogPost"> | string | null
    createAt?: DateTimeFilter<"BlogPost"> | Date | string
    updateAt?: DateTimeFilter<"BlogPost"> | Date | string
    aiSummary?: StringFilter<"BlogPost"> | string
    isPublic?: BoolFilter<"BlogPost"> | boolean
    likes?: BlogLikeListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blogPostImages?: BlogPostImageListRelationFilter
    bookMark?: BookMarkListRelationFilter
    comments?: CommentListRelationFilter
    notification?: NotificationListRelationFilter
  }, "id">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tag?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    aiSummary?: SortOrder
    isPublic?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _avg?: BlogPostAvgOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
    _sum?: BlogPostSumOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlogPost"> | number
    userId?: StringWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    content?: StringWithAggregatesFilter<"BlogPost"> | string
    tag?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    aiSummary?: StringWithAggregatesFilter<"BlogPost"> | string
    isPublic?: BoolWithAggregatesFilter<"BlogPost"> | boolean
  }

  export type NotificationBoxWhereInput = {
    AND?: NotificationBoxWhereInput | NotificationBoxWhereInput[]
    OR?: NotificationBoxWhereInput[]
    NOT?: NotificationBoxWhereInput | NotificationBoxWhereInput[]
    id?: IntFilter<"NotificationBox"> | number
    userId?: StringFilter<"NotificationBox"> | string
    isRead?: BoolFilter<"NotificationBox"> | boolean
    notification?: NotificationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationBoxOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    notification?: NotificationOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type NotificationBoxWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationBoxWhereInput | NotificationBoxWhereInput[]
    OR?: NotificationBoxWhereInput[]
    NOT?: NotificationBoxWhereInput | NotificationBoxWhereInput[]
    userId?: StringFilter<"NotificationBox"> | string
    isRead?: BoolFilter<"NotificationBox"> | boolean
    notification?: NotificationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationBoxOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    _count?: NotificationBoxCountOrderByAggregateInput
    _avg?: NotificationBoxAvgOrderByAggregateInput
    _max?: NotificationBoxMaxOrderByAggregateInput
    _min?: NotificationBoxMinOrderByAggregateInput
    _sum?: NotificationBoxSumOrderByAggregateInput
  }

  export type NotificationBoxScalarWhereWithAggregatesInput = {
    AND?: NotificationBoxScalarWhereWithAggregatesInput | NotificationBoxScalarWhereWithAggregatesInput[]
    OR?: NotificationBoxScalarWhereWithAggregatesInput[]
    NOT?: NotificationBoxScalarWhereWithAggregatesInput | NotificationBoxScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotificationBox"> | number
    userId?: StringWithAggregatesFilter<"NotificationBox"> | string
    isRead?: BoolWithAggregatesFilter<"NotificationBox"> | boolean
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    blogId?: IntFilter<"Notification"> | number
    notificationBoxId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
    blogs?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    notification?: XOR<NotificationBoxScalarRelationFilter, NotificationBoxWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    notificationBoxId?: SortOrder
    type?: SortOrder
    blogs?: BlogPostOrderByWithRelationInput
    notification?: NotificationBoxOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    blogId?: IntFilter<"Notification"> | number
    notificationBoxId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
    blogs?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    notification?: XOR<NotificationBoxScalarRelationFilter, NotificationBoxWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    notificationBoxId?: SortOrder
    type?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    blogId?: IntWithAggregatesFilter<"Notification"> | number
    notificationBoxId?: IntWithAggregatesFilter<"Notification"> | number
    type?: StringWithAggregatesFilter<"Notification"> | string
  }

  export type BookMarkWhereInput = {
    AND?: BookMarkWhereInput | BookMarkWhereInput[]
    OR?: BookMarkWhereInput[]
    NOT?: BookMarkWhereInput | BookMarkWhereInput[]
    id?: IntFilter<"BookMark"> | number
    blogId?: IntFilter<"BookMark"> | number
    userId?: StringFilter<"BookMark"> | string
    createAt?: DateTimeFilter<"BookMark"> | Date | string
    blogs?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BookMarkOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    blogs?: BlogPostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BookMarkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookMarkWhereInput | BookMarkWhereInput[]
    OR?: BookMarkWhereInput[]
    NOT?: BookMarkWhereInput | BookMarkWhereInput[]
    blogId?: IntFilter<"BookMark"> | number
    userId?: StringFilter<"BookMark"> | string
    createAt?: DateTimeFilter<"BookMark"> | Date | string
    blogs?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BookMarkOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    _count?: BookMarkCountOrderByAggregateInput
    _avg?: BookMarkAvgOrderByAggregateInput
    _max?: BookMarkMaxOrderByAggregateInput
    _min?: BookMarkMinOrderByAggregateInput
    _sum?: BookMarkSumOrderByAggregateInput
  }

  export type BookMarkScalarWhereWithAggregatesInput = {
    AND?: BookMarkScalarWhereWithAggregatesInput | BookMarkScalarWhereWithAggregatesInput[]
    OR?: BookMarkScalarWhereWithAggregatesInput[]
    NOT?: BookMarkScalarWhereWithAggregatesInput | BookMarkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookMark"> | number
    blogId?: IntWithAggregatesFilter<"BookMark"> | number
    userId?: StringWithAggregatesFilter<"BookMark"> | string
    createAt?: DateTimeWithAggregatesFilter<"BookMark"> | Date | string
  }

  export type BlogLikeWhereInput = {
    AND?: BlogLikeWhereInput | BlogLikeWhereInput[]
    OR?: BlogLikeWhereInput[]
    NOT?: BlogLikeWhereInput | BlogLikeWhereInput[]
    id?: IntFilter<"BlogLike"> | number
    blogId?: IntFilter<"BlogLike"> | number
    userId?: StringFilter<"BlogLike"> | string
    blogs?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlogLikeOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    blogs?: BlogPostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BlogLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogLikeWhereInput | BlogLikeWhereInput[]
    OR?: BlogLikeWhereInput[]
    NOT?: BlogLikeWhereInput | BlogLikeWhereInput[]
    blogId?: IntFilter<"BlogLike"> | number
    userId?: StringFilter<"BlogLike"> | string
    blogs?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BlogLikeOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    _count?: BlogLikeCountOrderByAggregateInput
    _avg?: BlogLikeAvgOrderByAggregateInput
    _max?: BlogLikeMaxOrderByAggregateInput
    _min?: BlogLikeMinOrderByAggregateInput
    _sum?: BlogLikeSumOrderByAggregateInput
  }

  export type BlogLikeScalarWhereWithAggregatesInput = {
    AND?: BlogLikeScalarWhereWithAggregatesInput | BlogLikeScalarWhereWithAggregatesInput[]
    OR?: BlogLikeScalarWhereWithAggregatesInput[]
    NOT?: BlogLikeScalarWhereWithAggregatesInput | BlogLikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlogLike"> | number
    blogId?: IntWithAggregatesFilter<"BlogLike"> | number
    userId?: StringWithAggregatesFilter<"BlogLike"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    blogId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createAt?: DateTimeFilter<"Comment"> | Date | string
    deleteAt?: DateTimeFilter<"Comment"> | Date | string
    blogs?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    deleteAt?: SortOrder
    blogs?: BlogPostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    blogId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createAt?: DateTimeFilter<"Comment"> | Date | string
    deleteAt?: DateTimeFilter<"Comment"> | Date | string
    blogs?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    deleteAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    blogId?: IntWithAggregatesFilter<"Comment"> | number
    userId?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    deleteAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type BlogPostImageWhereInput = {
    AND?: BlogPostImageWhereInput | BlogPostImageWhereInput[]
    OR?: BlogPostImageWhereInput[]
    NOT?: BlogPostImageWhereInput | BlogPostImageWhereInput[]
    id?: IntFilter<"BlogPostImage"> | number
    blogId?: IntFilter<"BlogPostImage"> | number
    image?: StringNullableFilter<"BlogPostImage"> | string | null
    blogs?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
  }

  export type BlogPostImageOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    image?: SortOrderInput | SortOrder
    blogs?: BlogPostOrderByWithRelationInput
  }

  export type BlogPostImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogPostImageWhereInput | BlogPostImageWhereInput[]
    OR?: BlogPostImageWhereInput[]
    NOT?: BlogPostImageWhereInput | BlogPostImageWhereInput[]
    blogId?: IntFilter<"BlogPostImage"> | number
    image?: StringNullableFilter<"BlogPostImage"> | string | null
    blogs?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
  }, "id">

  export type BlogPostImageOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: BlogPostImageCountOrderByAggregateInput
    _avg?: BlogPostImageAvgOrderByAggregateInput
    _max?: BlogPostImageMaxOrderByAggregateInput
    _min?: BlogPostImageMinOrderByAggregateInput
    _sum?: BlogPostImageSumOrderByAggregateInput
  }

  export type BlogPostImageScalarWhereWithAggregatesInput = {
    AND?: BlogPostImageScalarWhereWithAggregatesInput | BlogPostImageScalarWhereWithAggregatesInput[]
    OR?: BlogPostImageScalarWhereWithAggregatesInput[]
    NOT?: BlogPostImageScalarWhereWithAggregatesInput | BlogPostImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlogPostImage"> | number
    blogId?: IntWithAggregatesFilter<"BlogPostImage"> | number
    image?: StringNullableWithAggregatesFilter<"BlogPostImage"> | string | null
  }

  export type SubscribeWhereInput = {
    AND?: SubscribeWhereInput | SubscribeWhereInput[]
    OR?: SubscribeWhereInput[]
    NOT?: SubscribeWhereInput | SubscribeWhereInput[]
    id?: IntFilter<"Subscribe"> | number
    requestId?: StringNullableFilter<"Subscribe"> | string | null
    responseId?: StringNullableFilter<"Subscribe"> | string | null
    createAt?: DateTimeFilter<"Subscribe"> | Date | string
  }

  export type SubscribeOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrderInput | SortOrder
    responseId?: SortOrderInput | SortOrder
    createAt?: SortOrder
  }

  export type SubscribeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubscribeWhereInput | SubscribeWhereInput[]
    OR?: SubscribeWhereInput[]
    NOT?: SubscribeWhereInput | SubscribeWhereInput[]
    requestId?: StringNullableFilter<"Subscribe"> | string | null
    responseId?: StringNullableFilter<"Subscribe"> | string | null
    createAt?: DateTimeFilter<"Subscribe"> | Date | string
  }, "id">

  export type SubscribeOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrderInput | SortOrder
    responseId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    _count?: SubscribeCountOrderByAggregateInput
    _avg?: SubscribeAvgOrderByAggregateInput
    _max?: SubscribeMaxOrderByAggregateInput
    _min?: SubscribeMinOrderByAggregateInput
    _sum?: SubscribeSumOrderByAggregateInput
  }

  export type SubscribeScalarWhereWithAggregatesInput = {
    AND?: SubscribeScalarWhereWithAggregatesInput | SubscribeScalarWhereWithAggregatesInput[]
    OR?: SubscribeScalarWhereWithAggregatesInput[]
    NOT?: SubscribeScalarWhereWithAggregatesInput | SubscribeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscribe"> | number
    requestId?: StringNullableWithAggregatesFilter<"Subscribe"> | string | null
    responseId?: StringNullableWithAggregatesFilter<"Subscribe"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"Subscribe"> | Date | string
  }

  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: IntFilter<"Provider"> | number
    name?: StringFilter<"Provider"> | string
    userProvider?: UserProviderListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userProvider?: UserProviderOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    userProvider?: UserProviderListRelationFilter
  }, "id" | "name">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _avg?: ProviderAvgOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
    _sum?: ProviderSumOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Provider"> | number
    name?: StringWithAggregatesFilter<"Provider"> | string
  }

  export type UserProviderWhereInput = {
    AND?: UserProviderWhereInput | UserProviderWhereInput[]
    OR?: UserProviderWhereInput[]
    NOT?: UserProviderWhereInput | UserProviderWhereInput[]
    id?: IntFilter<"UserProvider"> | number
    providerId?: IntFilter<"UserProvider"> | number
    userId?: StringFilter<"UserProvider"> | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProviderOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserProviderWhereInput | UserProviderWhereInput[]
    OR?: UserProviderWhereInput[]
    NOT?: UserProviderWhereInput | UserProviderWhereInput[]
    providerId?: IntFilter<"UserProvider"> | number
    userId?: StringFilter<"UserProvider"> | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserProviderOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    _count?: UserProviderCountOrderByAggregateInput
    _avg?: UserProviderAvgOrderByAggregateInput
    _max?: UserProviderMaxOrderByAggregateInput
    _min?: UserProviderMinOrderByAggregateInput
    _sum?: UserProviderSumOrderByAggregateInput
  }

  export type UserProviderScalarWhereWithAggregatesInput = {
    AND?: UserProviderScalarWhereWithAggregatesInput | UserProviderScalarWhereWithAggregatesInput[]
    OR?: UserProviderScalarWhereWithAggregatesInput[]
    NOT?: UserProviderScalarWhereWithAggregatesInput | UserProviderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProvider"> | number
    providerId?: IntWithAggregatesFilter<"UserProvider"> | number
    userId?: StringWithAggregatesFilter<"UserProvider"> | string
  }

  export type UserCreateInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeCreateNestedManyWithoutUserInput
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxCreateNestedManyWithoutUserInput
    userProvider?: UserProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeUncheckedCreateNestedManyWithoutUserInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxUncheckedCreateNestedManyWithoutUserInput
    userProvider?: UserProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUncheckedUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUncheckedUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogPostCreateInput = {
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeCreateNestedManyWithoutBlogsInput
    user: UserCreateNestedOneWithoutBlogPostInput
    blogPostImages?: BlogPostImageCreateNestedManyWithoutBlogsInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogsInput
    comments?: CommentCreateNestedManyWithoutBlogsInput
    notification?: NotificationCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: number
    userId: string
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeUncheckedCreateNestedManyWithoutBlogsInput
    blogPostImages?: BlogPostImageUncheckedCreateNestedManyWithoutBlogsInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogsInput
    comments?: CommentUncheckedCreateNestedManyWithoutBlogsInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUpdateManyWithoutBlogsNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    blogPostImages?: BlogPostImageUpdateManyWithoutBlogsNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogsNestedInput
    comments?: CommentUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUpdateManyWithoutBlogsNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUncheckedUpdateManyWithoutBlogsNestedInput
    blogPostImages?: BlogPostImageUncheckedUpdateManyWithoutBlogsNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogsNestedInput
  }

  export type BlogPostCreateManyInput = {
    id?: number
    userId: string
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
  }

  export type BlogPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationBoxCreateInput = {
    isRead?: boolean
    notification?: NotificationCreateNestedManyWithoutNotificationInput
    user: UserCreateNestedOneWithoutNotificationBoxInput
  }

  export type NotificationBoxUncheckedCreateInput = {
    id?: number
    userId: string
    isRead?: boolean
    notification?: NotificationUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationBoxUpdateInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
    notification?: NotificationUpdateManyWithoutNotificationNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationBoxNestedInput
  }

  export type NotificationBoxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    notification?: NotificationUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationBoxCreateManyInput = {
    id?: number
    userId: string
    isRead?: boolean
  }

  export type NotificationBoxUpdateManyMutationInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationBoxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateInput = {
    type: string
    blogs: BlogPostCreateNestedOneWithoutNotificationInput
    notification: NotificationBoxCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    blogId: number
    notificationBoxId: number
    type: string
  }

  export type NotificationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    blogs?: BlogPostUpdateOneRequiredWithoutNotificationNestedInput
    notification?: NotificationBoxUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    notificationBoxId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    blogId: number
    notificationBoxId: number
    type: string
  }

  export type NotificationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    notificationBoxId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type BookMarkCreateInput = {
    createAt?: Date | string
    blogs: BlogPostCreateNestedOneWithoutBookMarkInput
    user: UserCreateNestedOneWithoutBookMarkInput
  }

  export type BookMarkUncheckedCreateInput = {
    id?: number
    blogId: number
    userId: string
    createAt?: Date | string
  }

  export type BookMarkUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogPostUpdateOneRequiredWithoutBookMarkNestedInput
    user?: UserUpdateOneRequiredWithoutBookMarkNestedInput
  }

  export type BookMarkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookMarkCreateManyInput = {
    id?: number
    blogId: number
    userId: string
    createAt?: Date | string
  }

  export type BookMarkUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookMarkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogLikeCreateInput = {
    blogs: BlogPostCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type BlogLikeUncheckedCreateInput = {
    id?: number
    blogId: number
    userId: string
  }

  export type BlogLikeUpdateInput = {
    blogs?: BlogPostUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type BlogLikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogLikeCreateManyInput = {
    id?: number
    blogId: number
    userId: string
  }

  export type BlogLikeUpdateManyMutationInput = {

  }

  export type BlogLikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    content: string
    createAt?: Date | string
    deleteAt?: Date | string
    blogs: BlogPostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    blogId: number
    userId: string
    content: string
    createAt?: Date | string
    deleteAt?: Date | string
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogPostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    blogId: number
    userId: string
    content: string
    createAt?: Date | string
    deleteAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostImageCreateInput = {
    image?: string | null
    blogs: BlogPostCreateNestedOneWithoutBlogPostImagesInput
  }

  export type BlogPostImageUncheckedCreateInput = {
    id?: number
    blogId: number
    image?: string | null
  }

  export type BlogPostImageUpdateInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    blogs?: BlogPostUpdateOneRequiredWithoutBlogPostImagesNestedInput
  }

  export type BlogPostImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostImageCreateManyInput = {
    id?: number
    blogId: number
    image?: string | null
  }

  export type BlogPostImageUpdateManyMutationInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscribeCreateInput = {
    requestId?: string | null
    responseId?: string | null
    createAt?: Date | string
  }

  export type SubscribeUncheckedCreateInput = {
    id?: number
    requestId?: string | null
    responseId?: string | null
    createAt?: Date | string
  }

  export type SubscribeUpdateInput = {
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    responseId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    responseId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribeCreateManyInput = {
    id?: number
    requestId?: string | null
    responseId?: string | null
    createAt?: Date | string
  }

  export type SubscribeUpdateManyMutationInput = {
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    responseId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    responseId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateInput = {
    name: string
    userProvider?: UserProviderCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id?: number
    name: string
    userProvider?: UserProviderUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    userProvider?: UserProviderUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userProvider?: UserProviderUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id?: number
    name: string
  }

  export type ProviderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserProviderCreateInput = {
    provider: ProviderCreateNestedOneWithoutUserProviderInput
    user: UserCreateNestedOneWithoutUserProviderInput
  }

  export type UserProviderUncheckedCreateInput = {
    id?: number
    providerId: number
    userId: string
  }

  export type UserProviderUpdateInput = {
    provider?: ProviderUpdateOneRequiredWithoutUserProviderNestedInput
    user?: UserUpdateOneRequiredWithoutUserProviderNestedInput
  }

  export type UserProviderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserProviderCreateManyInput = {
    id?: number
    providerId: number
    userId: string
  }

  export type UserProviderUpdateManyMutationInput = {

  }

  export type UserProviderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BlogLikeListRelationFilter = {
    every?: BlogLikeWhereInput
    some?: BlogLikeWhereInput
    none?: BlogLikeWhereInput
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type BookMarkListRelationFilter = {
    every?: BookMarkWhereInput
    some?: BookMarkWhereInput
    none?: BookMarkWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type NotificationBoxListRelationFilter = {
    every?: NotificationBoxWhereInput
    some?: NotificationBoxWhereInput
    none?: NotificationBoxWhereInput
  }

  export type UserProviderListRelationFilter = {
    every?: UserProviderWhereInput
    some?: UserProviderWhereInput
    none?: UserProviderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookMarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationBoxOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProviderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    introduction?: SortOrder
    backgroundImg?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    introduction?: SortOrder
    backgroundImg?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    introduction?: SortOrder
    backgroundImg?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BlogPostImageListRelationFilter = {
    every?: BlogPostImageWhereInput
    some?: BlogPostImageWhereInput
    none?: BlogPostImageWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type BlogPostImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tag?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    aiSummary?: SortOrder
    isPublic?: SortOrder
  }

  export type BlogPostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tag?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    aiSummary?: SortOrder
    isPublic?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tag?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    aiSummary?: SortOrder
    isPublic?: SortOrder
  }

  export type BlogPostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NotificationBoxCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationBoxAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationBoxMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationBoxMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationBoxSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlogPostScalarRelationFilter = {
    is?: BlogPostWhereInput
    isNot?: BlogPostWhereInput
  }

  export type NotificationBoxScalarRelationFilter = {
    is?: NotificationBoxWhereInput
    isNot?: NotificationBoxWhereInput
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    notificationBoxId?: SortOrder
    type?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    notificationBoxId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    notificationBoxId?: SortOrder
    type?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    notificationBoxId?: SortOrder
    type?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    notificationBoxId?: SortOrder
  }

  export type BookMarkCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
  }

  export type BookMarkAvgOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
  }

  export type BookMarkMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
  }

  export type BookMarkMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
  }

  export type BookMarkSumOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
  }

  export type BlogLikeCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
  }

  export type BlogLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
  }

  export type BlogLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
  }

  export type BlogLikeMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
  }

  export type BlogLikeSumOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
  }

  export type BlogPostImageCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    image?: SortOrder
  }

  export type BlogPostImageAvgOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
  }

  export type BlogPostImageMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    image?: SortOrder
  }

  export type BlogPostImageMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    image?: SortOrder
  }

  export type BlogPostImageSumOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
  }

  export type SubscribeCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    responseId?: SortOrder
    createAt?: SortOrder
  }

  export type SubscribeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubscribeMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    responseId?: SortOrder
    createAt?: SortOrder
  }

  export type SubscribeMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    responseId?: SortOrder
    createAt?: SortOrder
  }

  export type SubscribeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProviderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProviderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProviderScalarRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type UserProviderCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
  }

  export type UserProviderAvgOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
  }

  export type UserProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
  }

  export type UserProviderMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
  }

  export type UserProviderSumOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
  }

  export type BlogLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput> | BlogLikeCreateWithoutUserInput[] | BlogLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutUserInput | BlogLikeCreateOrConnectWithoutUserInput[]
    createMany?: BlogLikeCreateManyUserInputEnvelope
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
  }

  export type BlogPostCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BookMarkCreateNestedManyWithoutUserInput = {
    create?: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput> | BookMarkCreateWithoutUserInput[] | BookMarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutUserInput | BookMarkCreateOrConnectWithoutUserInput[]
    createMany?: BookMarkCreateManyUserInputEnvelope
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationBoxCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationBoxCreateWithoutUserInput, NotificationBoxUncheckedCreateWithoutUserInput> | NotificationBoxCreateWithoutUserInput[] | NotificationBoxUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationBoxCreateOrConnectWithoutUserInput | NotificationBoxCreateOrConnectWithoutUserInput[]
    createMany?: NotificationBoxCreateManyUserInputEnvelope
    connect?: NotificationBoxWhereUniqueInput | NotificationBoxWhereUniqueInput[]
  }

  export type UserProviderCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput> | UserProviderCreateWithoutUserInput[] | UserProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutUserInput | UserProviderCreateOrConnectWithoutUserInput[]
    createMany?: UserProviderCreateManyUserInputEnvelope
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
  }

  export type BlogLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput> | BlogLikeCreateWithoutUserInput[] | BlogLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutUserInput | BlogLikeCreateOrConnectWithoutUserInput[]
    createMany?: BlogLikeCreateManyUserInputEnvelope
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BookMarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput> | BookMarkCreateWithoutUserInput[] | BookMarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutUserInput | BookMarkCreateOrConnectWithoutUserInput[]
    createMany?: BookMarkCreateManyUserInputEnvelope
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationBoxUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationBoxCreateWithoutUserInput, NotificationBoxUncheckedCreateWithoutUserInput> | NotificationBoxCreateWithoutUserInput[] | NotificationBoxUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationBoxCreateOrConnectWithoutUserInput | NotificationBoxCreateOrConnectWithoutUserInput[]
    createMany?: NotificationBoxCreateManyUserInputEnvelope
    connect?: NotificationBoxWhereUniqueInput | NotificationBoxWhereUniqueInput[]
  }

  export type UserProviderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput> | UserProviderCreateWithoutUserInput[] | UserProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutUserInput | UserProviderCreateOrConnectWithoutUserInput[]
    createMany?: UserProviderCreateManyUserInputEnvelope
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BlogLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput> | BlogLikeCreateWithoutUserInput[] | BlogLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutUserInput | BlogLikeCreateOrConnectWithoutUserInput[]
    upsert?: BlogLikeUpsertWithWhereUniqueWithoutUserInput | BlogLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogLikeCreateManyUserInputEnvelope
    set?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    disconnect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    delete?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    update?: BlogLikeUpdateWithWhereUniqueWithoutUserInput | BlogLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogLikeUpdateManyWithWhereWithoutUserInput | BlogLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
  }

  export type BlogPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutUserInput | BlogPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutUserInput | BlogPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutUserInput | BlogPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BookMarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput> | BookMarkCreateWithoutUserInput[] | BookMarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutUserInput | BookMarkCreateOrConnectWithoutUserInput[]
    upsert?: BookMarkUpsertWithWhereUniqueWithoutUserInput | BookMarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookMarkCreateManyUserInputEnvelope
    set?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    disconnect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    delete?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    update?: BookMarkUpdateWithWhereUniqueWithoutUserInput | BookMarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookMarkUpdateManyWithWhereWithoutUserInput | BookMarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationBoxUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationBoxCreateWithoutUserInput, NotificationBoxUncheckedCreateWithoutUserInput> | NotificationBoxCreateWithoutUserInput[] | NotificationBoxUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationBoxCreateOrConnectWithoutUserInput | NotificationBoxCreateOrConnectWithoutUserInput[]
    upsert?: NotificationBoxUpsertWithWhereUniqueWithoutUserInput | NotificationBoxUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationBoxCreateManyUserInputEnvelope
    set?: NotificationBoxWhereUniqueInput | NotificationBoxWhereUniqueInput[]
    disconnect?: NotificationBoxWhereUniqueInput | NotificationBoxWhereUniqueInput[]
    delete?: NotificationBoxWhereUniqueInput | NotificationBoxWhereUniqueInput[]
    connect?: NotificationBoxWhereUniqueInput | NotificationBoxWhereUniqueInput[]
    update?: NotificationBoxUpdateWithWhereUniqueWithoutUserInput | NotificationBoxUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationBoxUpdateManyWithWhereWithoutUserInput | NotificationBoxUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationBoxScalarWhereInput | NotificationBoxScalarWhereInput[]
  }

  export type UserProviderUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput> | UserProviderCreateWithoutUserInput[] | UserProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutUserInput | UserProviderCreateOrConnectWithoutUserInput[]
    upsert?: UserProviderUpsertWithWhereUniqueWithoutUserInput | UserProviderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProviderCreateManyUserInputEnvelope
    set?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    disconnect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    delete?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    update?: UserProviderUpdateWithWhereUniqueWithoutUserInput | UserProviderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProviderUpdateManyWithWhereWithoutUserInput | UserProviderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProviderScalarWhereInput | UserProviderScalarWhereInput[]
  }

  export type BlogLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput> | BlogLikeCreateWithoutUserInput[] | BlogLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutUserInput | BlogLikeCreateOrConnectWithoutUserInput[]
    upsert?: BlogLikeUpsertWithWhereUniqueWithoutUserInput | BlogLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogLikeCreateManyUserInputEnvelope
    set?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    disconnect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    delete?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    update?: BlogLikeUpdateWithWhereUniqueWithoutUserInput | BlogLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogLikeUpdateManyWithWhereWithoutUserInput | BlogLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutUserInput | BlogPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutUserInput | BlogPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutUserInput | BlogPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BookMarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput> | BookMarkCreateWithoutUserInput[] | BookMarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutUserInput | BookMarkCreateOrConnectWithoutUserInput[]
    upsert?: BookMarkUpsertWithWhereUniqueWithoutUserInput | BookMarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookMarkCreateManyUserInputEnvelope
    set?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    disconnect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    delete?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    update?: BookMarkUpdateWithWhereUniqueWithoutUserInput | BookMarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookMarkUpdateManyWithWhereWithoutUserInput | BookMarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationBoxUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationBoxCreateWithoutUserInput, NotificationBoxUncheckedCreateWithoutUserInput> | NotificationBoxCreateWithoutUserInput[] | NotificationBoxUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationBoxCreateOrConnectWithoutUserInput | NotificationBoxCreateOrConnectWithoutUserInput[]
    upsert?: NotificationBoxUpsertWithWhereUniqueWithoutUserInput | NotificationBoxUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationBoxCreateManyUserInputEnvelope
    set?: NotificationBoxWhereUniqueInput | NotificationBoxWhereUniqueInput[]
    disconnect?: NotificationBoxWhereUniqueInput | NotificationBoxWhereUniqueInput[]
    delete?: NotificationBoxWhereUniqueInput | NotificationBoxWhereUniqueInput[]
    connect?: NotificationBoxWhereUniqueInput | NotificationBoxWhereUniqueInput[]
    update?: NotificationBoxUpdateWithWhereUniqueWithoutUserInput | NotificationBoxUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationBoxUpdateManyWithWhereWithoutUserInput | NotificationBoxUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationBoxScalarWhereInput | NotificationBoxScalarWhereInput[]
  }

  export type UserProviderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput> | UserProviderCreateWithoutUserInput[] | UserProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutUserInput | UserProviderCreateOrConnectWithoutUserInput[]
    upsert?: UserProviderUpsertWithWhereUniqueWithoutUserInput | UserProviderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProviderCreateManyUserInputEnvelope
    set?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    disconnect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    delete?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    update?: UserProviderUpdateWithWhereUniqueWithoutUserInput | UserProviderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProviderUpdateManyWithWhereWithoutUserInput | UserProviderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProviderScalarWhereInput | UserProviderScalarWhereInput[]
  }

  export type BlogLikeCreateNestedManyWithoutBlogsInput = {
    create?: XOR<BlogLikeCreateWithoutBlogsInput, BlogLikeUncheckedCreateWithoutBlogsInput> | BlogLikeCreateWithoutBlogsInput[] | BlogLikeUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutBlogsInput | BlogLikeCreateOrConnectWithoutBlogsInput[]
    createMany?: BlogLikeCreateManyBlogsInputEnvelope
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutBlogPostInput = {
    create?: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostImageCreateNestedManyWithoutBlogsInput = {
    create?: XOR<BlogPostImageCreateWithoutBlogsInput, BlogPostImageUncheckedCreateWithoutBlogsInput> | BlogPostImageCreateWithoutBlogsInput[] | BlogPostImageUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogPostImageCreateOrConnectWithoutBlogsInput | BlogPostImageCreateOrConnectWithoutBlogsInput[]
    createMany?: BlogPostImageCreateManyBlogsInputEnvelope
    connect?: BlogPostImageWhereUniqueInput | BlogPostImageWhereUniqueInput[]
  }

  export type BookMarkCreateNestedManyWithoutBlogsInput = {
    create?: XOR<BookMarkCreateWithoutBlogsInput, BookMarkUncheckedCreateWithoutBlogsInput> | BookMarkCreateWithoutBlogsInput[] | BookMarkUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutBlogsInput | BookMarkCreateOrConnectWithoutBlogsInput[]
    createMany?: BookMarkCreateManyBlogsInputEnvelope
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutBlogsInput = {
    create?: XOR<CommentCreateWithoutBlogsInput, CommentUncheckedCreateWithoutBlogsInput> | CommentCreateWithoutBlogsInput[] | CommentUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogsInput | CommentCreateOrConnectWithoutBlogsInput[]
    createMany?: CommentCreateManyBlogsInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutBlogsInput = {
    create?: XOR<NotificationCreateWithoutBlogsInput, NotificationUncheckedCreateWithoutBlogsInput> | NotificationCreateWithoutBlogsInput[] | NotificationUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBlogsInput | NotificationCreateOrConnectWithoutBlogsInput[]
    createMany?: NotificationCreateManyBlogsInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BlogLikeUncheckedCreateNestedManyWithoutBlogsInput = {
    create?: XOR<BlogLikeCreateWithoutBlogsInput, BlogLikeUncheckedCreateWithoutBlogsInput> | BlogLikeCreateWithoutBlogsInput[] | BlogLikeUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutBlogsInput | BlogLikeCreateOrConnectWithoutBlogsInput[]
    createMany?: BlogLikeCreateManyBlogsInputEnvelope
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
  }

  export type BlogPostImageUncheckedCreateNestedManyWithoutBlogsInput = {
    create?: XOR<BlogPostImageCreateWithoutBlogsInput, BlogPostImageUncheckedCreateWithoutBlogsInput> | BlogPostImageCreateWithoutBlogsInput[] | BlogPostImageUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogPostImageCreateOrConnectWithoutBlogsInput | BlogPostImageCreateOrConnectWithoutBlogsInput[]
    createMany?: BlogPostImageCreateManyBlogsInputEnvelope
    connect?: BlogPostImageWhereUniqueInput | BlogPostImageWhereUniqueInput[]
  }

  export type BookMarkUncheckedCreateNestedManyWithoutBlogsInput = {
    create?: XOR<BookMarkCreateWithoutBlogsInput, BookMarkUncheckedCreateWithoutBlogsInput> | BookMarkCreateWithoutBlogsInput[] | BookMarkUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutBlogsInput | BookMarkCreateOrConnectWithoutBlogsInput[]
    createMany?: BookMarkCreateManyBlogsInputEnvelope
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutBlogsInput = {
    create?: XOR<CommentCreateWithoutBlogsInput, CommentUncheckedCreateWithoutBlogsInput> | CommentCreateWithoutBlogsInput[] | CommentUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogsInput | CommentCreateOrConnectWithoutBlogsInput[]
    createMany?: CommentCreateManyBlogsInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutBlogsInput = {
    create?: XOR<NotificationCreateWithoutBlogsInput, NotificationUncheckedCreateWithoutBlogsInput> | NotificationCreateWithoutBlogsInput[] | NotificationUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBlogsInput | NotificationCreateOrConnectWithoutBlogsInput[]
    createMany?: NotificationCreateManyBlogsInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BlogLikeUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<BlogLikeCreateWithoutBlogsInput, BlogLikeUncheckedCreateWithoutBlogsInput> | BlogLikeCreateWithoutBlogsInput[] | BlogLikeUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutBlogsInput | BlogLikeCreateOrConnectWithoutBlogsInput[]
    upsert?: BlogLikeUpsertWithWhereUniqueWithoutBlogsInput | BlogLikeUpsertWithWhereUniqueWithoutBlogsInput[]
    createMany?: BlogLikeCreateManyBlogsInputEnvelope
    set?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    disconnect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    delete?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    update?: BlogLikeUpdateWithWhereUniqueWithoutBlogsInput | BlogLikeUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: BlogLikeUpdateManyWithWhereWithoutBlogsInput | BlogLikeUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutBlogPostNestedInput = {
    create?: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostInput
    upsert?: UserUpsertWithoutBlogPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogPostInput, UserUpdateWithoutBlogPostInput>, UserUncheckedUpdateWithoutBlogPostInput>
  }

  export type BlogPostImageUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<BlogPostImageCreateWithoutBlogsInput, BlogPostImageUncheckedCreateWithoutBlogsInput> | BlogPostImageCreateWithoutBlogsInput[] | BlogPostImageUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogPostImageCreateOrConnectWithoutBlogsInput | BlogPostImageCreateOrConnectWithoutBlogsInput[]
    upsert?: BlogPostImageUpsertWithWhereUniqueWithoutBlogsInput | BlogPostImageUpsertWithWhereUniqueWithoutBlogsInput[]
    createMany?: BlogPostImageCreateManyBlogsInputEnvelope
    set?: BlogPostImageWhereUniqueInput | BlogPostImageWhereUniqueInput[]
    disconnect?: BlogPostImageWhereUniqueInput | BlogPostImageWhereUniqueInput[]
    delete?: BlogPostImageWhereUniqueInput | BlogPostImageWhereUniqueInput[]
    connect?: BlogPostImageWhereUniqueInput | BlogPostImageWhereUniqueInput[]
    update?: BlogPostImageUpdateWithWhereUniqueWithoutBlogsInput | BlogPostImageUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: BlogPostImageUpdateManyWithWhereWithoutBlogsInput | BlogPostImageUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: BlogPostImageScalarWhereInput | BlogPostImageScalarWhereInput[]
  }

  export type BookMarkUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<BookMarkCreateWithoutBlogsInput, BookMarkUncheckedCreateWithoutBlogsInput> | BookMarkCreateWithoutBlogsInput[] | BookMarkUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutBlogsInput | BookMarkCreateOrConnectWithoutBlogsInput[]
    upsert?: BookMarkUpsertWithWhereUniqueWithoutBlogsInput | BookMarkUpsertWithWhereUniqueWithoutBlogsInput[]
    createMany?: BookMarkCreateManyBlogsInputEnvelope
    set?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    disconnect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    delete?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    update?: BookMarkUpdateWithWhereUniqueWithoutBlogsInput | BookMarkUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: BookMarkUpdateManyWithWhereWithoutBlogsInput | BookMarkUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<CommentCreateWithoutBlogsInput, CommentUncheckedCreateWithoutBlogsInput> | CommentCreateWithoutBlogsInput[] | CommentUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogsInput | CommentCreateOrConnectWithoutBlogsInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBlogsInput | CommentUpsertWithWhereUniqueWithoutBlogsInput[]
    createMany?: CommentCreateManyBlogsInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBlogsInput | CommentUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBlogsInput | CommentUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<NotificationCreateWithoutBlogsInput, NotificationUncheckedCreateWithoutBlogsInput> | NotificationCreateWithoutBlogsInput[] | NotificationUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBlogsInput | NotificationCreateOrConnectWithoutBlogsInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutBlogsInput | NotificationUpsertWithWhereUniqueWithoutBlogsInput[]
    createMany?: NotificationCreateManyBlogsInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutBlogsInput | NotificationUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutBlogsInput | NotificationUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BlogLikeUncheckedUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<BlogLikeCreateWithoutBlogsInput, BlogLikeUncheckedCreateWithoutBlogsInput> | BlogLikeCreateWithoutBlogsInput[] | BlogLikeUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutBlogsInput | BlogLikeCreateOrConnectWithoutBlogsInput[]
    upsert?: BlogLikeUpsertWithWhereUniqueWithoutBlogsInput | BlogLikeUpsertWithWhereUniqueWithoutBlogsInput[]
    createMany?: BlogLikeCreateManyBlogsInputEnvelope
    set?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    disconnect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    delete?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    update?: BlogLikeUpdateWithWhereUniqueWithoutBlogsInput | BlogLikeUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: BlogLikeUpdateManyWithWhereWithoutBlogsInput | BlogLikeUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
  }

  export type BlogPostImageUncheckedUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<BlogPostImageCreateWithoutBlogsInput, BlogPostImageUncheckedCreateWithoutBlogsInput> | BlogPostImageCreateWithoutBlogsInput[] | BlogPostImageUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogPostImageCreateOrConnectWithoutBlogsInput | BlogPostImageCreateOrConnectWithoutBlogsInput[]
    upsert?: BlogPostImageUpsertWithWhereUniqueWithoutBlogsInput | BlogPostImageUpsertWithWhereUniqueWithoutBlogsInput[]
    createMany?: BlogPostImageCreateManyBlogsInputEnvelope
    set?: BlogPostImageWhereUniqueInput | BlogPostImageWhereUniqueInput[]
    disconnect?: BlogPostImageWhereUniqueInput | BlogPostImageWhereUniqueInput[]
    delete?: BlogPostImageWhereUniqueInput | BlogPostImageWhereUniqueInput[]
    connect?: BlogPostImageWhereUniqueInput | BlogPostImageWhereUniqueInput[]
    update?: BlogPostImageUpdateWithWhereUniqueWithoutBlogsInput | BlogPostImageUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: BlogPostImageUpdateManyWithWhereWithoutBlogsInput | BlogPostImageUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: BlogPostImageScalarWhereInput | BlogPostImageScalarWhereInput[]
  }

  export type BookMarkUncheckedUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<BookMarkCreateWithoutBlogsInput, BookMarkUncheckedCreateWithoutBlogsInput> | BookMarkCreateWithoutBlogsInput[] | BookMarkUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutBlogsInput | BookMarkCreateOrConnectWithoutBlogsInput[]
    upsert?: BookMarkUpsertWithWhereUniqueWithoutBlogsInput | BookMarkUpsertWithWhereUniqueWithoutBlogsInput[]
    createMany?: BookMarkCreateManyBlogsInputEnvelope
    set?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    disconnect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    delete?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    update?: BookMarkUpdateWithWhereUniqueWithoutBlogsInput | BookMarkUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: BookMarkUpdateManyWithWhereWithoutBlogsInput | BookMarkUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<CommentCreateWithoutBlogsInput, CommentUncheckedCreateWithoutBlogsInput> | CommentCreateWithoutBlogsInput[] | CommentUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogsInput | CommentCreateOrConnectWithoutBlogsInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBlogsInput | CommentUpsertWithWhereUniqueWithoutBlogsInput[]
    createMany?: CommentCreateManyBlogsInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBlogsInput | CommentUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBlogsInput | CommentUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<NotificationCreateWithoutBlogsInput, NotificationUncheckedCreateWithoutBlogsInput> | NotificationCreateWithoutBlogsInput[] | NotificationUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBlogsInput | NotificationCreateOrConnectWithoutBlogsInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutBlogsInput | NotificationUpsertWithWhereUniqueWithoutBlogsInput[]
    createMany?: NotificationCreateManyBlogsInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutBlogsInput | NotificationUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutBlogsInput | NotificationUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationCreateWithoutNotificationInput, NotificationUncheckedCreateWithoutNotificationInput> | NotificationCreateWithoutNotificationInput[] | NotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutNotificationInput | NotificationCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationCreateManyNotificationInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutNotificationBoxInput = {
    create?: XOR<UserCreateWithoutNotificationBoxInput, UserUncheckedCreateWithoutNotificationBoxInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationBoxInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationCreateWithoutNotificationInput, NotificationUncheckedCreateWithoutNotificationInput> | NotificationCreateWithoutNotificationInput[] | NotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutNotificationInput | NotificationCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationCreateManyNotificationInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationCreateWithoutNotificationInput, NotificationUncheckedCreateWithoutNotificationInput> | NotificationCreateWithoutNotificationInput[] | NotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutNotificationInput | NotificationCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutNotificationInput | NotificationUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationCreateManyNotificationInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutNotificationInput | NotificationUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutNotificationInput | NotificationUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutNotificationBoxNestedInput = {
    create?: XOR<UserCreateWithoutNotificationBoxInput, UserUncheckedCreateWithoutNotificationBoxInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationBoxInput
    upsert?: UserUpsertWithoutNotificationBoxInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationBoxInput, UserUpdateWithoutNotificationBoxInput>, UserUncheckedUpdateWithoutNotificationBoxInput>
  }

  export type NotificationUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationCreateWithoutNotificationInput, NotificationUncheckedCreateWithoutNotificationInput> | NotificationCreateWithoutNotificationInput[] | NotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutNotificationInput | NotificationCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutNotificationInput | NotificationUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationCreateManyNotificationInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutNotificationInput | NotificationUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutNotificationInput | NotificationUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BlogPostCreateNestedOneWithoutNotificationInput = {
    create?: XOR<BlogPostCreateWithoutNotificationInput, BlogPostUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutNotificationInput
    connect?: BlogPostWhereUniqueInput
  }

  export type NotificationBoxCreateNestedOneWithoutNotificationInput = {
    create?: XOR<NotificationBoxCreateWithoutNotificationInput, NotificationBoxUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: NotificationBoxCreateOrConnectWithoutNotificationInput
    connect?: NotificationBoxWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<BlogPostCreateWithoutNotificationInput, BlogPostUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutNotificationInput
    upsert?: BlogPostUpsertWithoutNotificationInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutNotificationInput, BlogPostUpdateWithoutNotificationInput>, BlogPostUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationBoxUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<NotificationBoxCreateWithoutNotificationInput, NotificationBoxUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: NotificationBoxCreateOrConnectWithoutNotificationInput
    upsert?: NotificationBoxUpsertWithoutNotificationInput
    connect?: NotificationBoxWhereUniqueInput
    update?: XOR<XOR<NotificationBoxUpdateToOneWithWhereWithoutNotificationInput, NotificationBoxUpdateWithoutNotificationInput>, NotificationBoxUncheckedUpdateWithoutNotificationInput>
  }

  export type BlogPostCreateNestedOneWithoutBookMarkInput = {
    create?: XOR<BlogPostCreateWithoutBookMarkInput, BlogPostUncheckedCreateWithoutBookMarkInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutBookMarkInput
    connect?: BlogPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookMarkInput = {
    create?: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookMarkInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutBookMarkNestedInput = {
    create?: XOR<BlogPostCreateWithoutBookMarkInput, BlogPostUncheckedCreateWithoutBookMarkInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutBookMarkInput
    upsert?: BlogPostUpsertWithoutBookMarkInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutBookMarkInput, BlogPostUpdateWithoutBookMarkInput>, BlogPostUncheckedUpdateWithoutBookMarkInput>
  }

  export type UserUpdateOneRequiredWithoutBookMarkNestedInput = {
    create?: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookMarkInput
    upsert?: UserUpsertWithoutBookMarkInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookMarkInput, UserUpdateWithoutBookMarkInput>, UserUncheckedUpdateWithoutBookMarkInput>
  }

  export type BlogPostCreateNestedOneWithoutLikesInput = {
    create?: XOR<BlogPostCreateWithoutLikesInput, BlogPostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutLikesInput
    connect?: BlogPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<BlogPostCreateWithoutLikesInput, BlogPostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutLikesInput
    upsert?: BlogPostUpsertWithoutLikesInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutLikesInput, BlogPostUpdateWithoutLikesInput>, BlogPostUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type BlogPostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCommentsInput
    connect?: BlogPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCommentsInput
    upsert?: BlogPostUpsertWithoutCommentsInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutCommentsInput, BlogPostUpdateWithoutCommentsInput>, BlogPostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogPostCreateNestedOneWithoutBlogPostImagesInput = {
    create?: XOR<BlogPostCreateWithoutBlogPostImagesInput, BlogPostUncheckedCreateWithoutBlogPostImagesInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutBlogPostImagesInput
    connect?: BlogPostWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutBlogPostImagesNestedInput = {
    create?: XOR<BlogPostCreateWithoutBlogPostImagesInput, BlogPostUncheckedCreateWithoutBlogPostImagesInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutBlogPostImagesInput
    upsert?: BlogPostUpsertWithoutBlogPostImagesInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutBlogPostImagesInput, BlogPostUpdateWithoutBlogPostImagesInput>, BlogPostUncheckedUpdateWithoutBlogPostImagesInput>
  }

  export type UserProviderCreateNestedManyWithoutProviderInput = {
    create?: XOR<UserProviderCreateWithoutProviderInput, UserProviderUncheckedCreateWithoutProviderInput> | UserProviderCreateWithoutProviderInput[] | UserProviderUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutProviderInput | UserProviderCreateOrConnectWithoutProviderInput[]
    createMany?: UserProviderCreateManyProviderInputEnvelope
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
  }

  export type UserProviderUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<UserProviderCreateWithoutProviderInput, UserProviderUncheckedCreateWithoutProviderInput> | UserProviderCreateWithoutProviderInput[] | UserProviderUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutProviderInput | UserProviderCreateOrConnectWithoutProviderInput[]
    createMany?: UserProviderCreateManyProviderInputEnvelope
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
  }

  export type UserProviderUpdateManyWithoutProviderNestedInput = {
    create?: XOR<UserProviderCreateWithoutProviderInput, UserProviderUncheckedCreateWithoutProviderInput> | UserProviderCreateWithoutProviderInput[] | UserProviderUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutProviderInput | UserProviderCreateOrConnectWithoutProviderInput[]
    upsert?: UserProviderUpsertWithWhereUniqueWithoutProviderInput | UserProviderUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: UserProviderCreateManyProviderInputEnvelope
    set?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    disconnect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    delete?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    update?: UserProviderUpdateWithWhereUniqueWithoutProviderInput | UserProviderUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: UserProviderUpdateManyWithWhereWithoutProviderInput | UserProviderUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: UserProviderScalarWhereInput | UserProviderScalarWhereInput[]
  }

  export type UserProviderUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<UserProviderCreateWithoutProviderInput, UserProviderUncheckedCreateWithoutProviderInput> | UserProviderCreateWithoutProviderInput[] | UserProviderUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutProviderInput | UserProviderCreateOrConnectWithoutProviderInput[]
    upsert?: UserProviderUpsertWithWhereUniqueWithoutProviderInput | UserProviderUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: UserProviderCreateManyProviderInputEnvelope
    set?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    disconnect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    delete?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    update?: UserProviderUpdateWithWhereUniqueWithoutProviderInput | UserProviderUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: UserProviderUpdateManyWithWhereWithoutProviderInput | UserProviderUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: UserProviderScalarWhereInput | UserProviderScalarWhereInput[]
  }

  export type ProviderCreateNestedOneWithoutUserProviderInput = {
    create?: XOR<ProviderCreateWithoutUserProviderInput, ProviderUncheckedCreateWithoutUserProviderInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutUserProviderInput
    connect?: ProviderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserProviderInput = {
    create?: XOR<UserCreateWithoutUserProviderInput, UserUncheckedCreateWithoutUserProviderInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProviderInput
    connect?: UserWhereUniqueInput
  }

  export type ProviderUpdateOneRequiredWithoutUserProviderNestedInput = {
    create?: XOR<ProviderCreateWithoutUserProviderInput, ProviderUncheckedCreateWithoutUserProviderInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutUserProviderInput
    upsert?: ProviderUpsertWithoutUserProviderInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutUserProviderInput, ProviderUpdateWithoutUserProviderInput>, ProviderUncheckedUpdateWithoutUserProviderInput>
  }

  export type UserUpdateOneRequiredWithoutUserProviderNestedInput = {
    create?: XOR<UserCreateWithoutUserProviderInput, UserUncheckedCreateWithoutUserProviderInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProviderInput
    upsert?: UserUpsertWithoutUserProviderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProviderInput, UserUpdateWithoutUserProviderInput>, UserUncheckedUpdateWithoutUserProviderInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BlogLikeCreateWithoutUserInput = {
    blogs: BlogPostCreateNestedOneWithoutLikesInput
  }

  export type BlogLikeUncheckedCreateWithoutUserInput = {
    id?: number
    blogId: number
  }

  export type BlogLikeCreateOrConnectWithoutUserInput = {
    where: BlogLikeWhereUniqueInput
    create: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput>
  }

  export type BlogLikeCreateManyUserInputEnvelope = {
    data: BlogLikeCreateManyUserInput | BlogLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostCreateWithoutUserInput = {
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeCreateNestedManyWithoutBlogsInput
    blogPostImages?: BlogPostImageCreateNestedManyWithoutBlogsInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogsInput
    comments?: CommentCreateNestedManyWithoutBlogsInput
    notification?: NotificationCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeUncheckedCreateNestedManyWithoutBlogsInput
    blogPostImages?: BlogPostImageUncheckedCreateNestedManyWithoutBlogsInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogsInput
    comments?: CommentUncheckedCreateNestedManyWithoutBlogsInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostCreateOrConnectWithoutUserInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput>
  }

  export type BlogPostCreateManyUserInputEnvelope = {
    data: BlogPostCreateManyUserInput | BlogPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookMarkCreateWithoutUserInput = {
    createAt?: Date | string
    blogs: BlogPostCreateNestedOneWithoutBookMarkInput
  }

  export type BookMarkUncheckedCreateWithoutUserInput = {
    id?: number
    blogId: number
    createAt?: Date | string
  }

  export type BookMarkCreateOrConnectWithoutUserInput = {
    where: BookMarkWhereUniqueInput
    create: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput>
  }

  export type BookMarkCreateManyUserInputEnvelope = {
    data: BookMarkCreateManyUserInput | BookMarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    content: string
    createAt?: Date | string
    deleteAt?: Date | string
    blogs: BlogPostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    blogId: number
    content: string
    createAt?: Date | string
    deleteAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationBoxCreateWithoutUserInput = {
    isRead?: boolean
    notification?: NotificationCreateNestedManyWithoutNotificationInput
  }

  export type NotificationBoxUncheckedCreateWithoutUserInput = {
    id?: number
    isRead?: boolean
    notification?: NotificationUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationBoxCreateOrConnectWithoutUserInput = {
    where: NotificationBoxWhereUniqueInput
    create: XOR<NotificationBoxCreateWithoutUserInput, NotificationBoxUncheckedCreateWithoutUserInput>
  }

  export type NotificationBoxCreateManyUserInputEnvelope = {
    data: NotificationBoxCreateManyUserInput | NotificationBoxCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProviderCreateWithoutUserInput = {
    provider: ProviderCreateNestedOneWithoutUserProviderInput
  }

  export type UserProviderUncheckedCreateWithoutUserInput = {
    id?: number
    providerId: number
  }

  export type UserProviderCreateOrConnectWithoutUserInput = {
    where: UserProviderWhereUniqueInput
    create: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput>
  }

  export type UserProviderCreateManyUserInputEnvelope = {
    data: UserProviderCreateManyUserInput | UserProviderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogLikeWhereUniqueInput
    update: XOR<BlogLikeUpdateWithoutUserInput, BlogLikeUncheckedUpdateWithoutUserInput>
    create: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput>
  }

  export type BlogLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogLikeWhereUniqueInput
    data: XOR<BlogLikeUpdateWithoutUserInput, BlogLikeUncheckedUpdateWithoutUserInput>
  }

  export type BlogLikeUpdateManyWithWhereWithoutUserInput = {
    where: BlogLikeScalarWhereInput
    data: XOR<BlogLikeUpdateManyMutationInput, BlogLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogLikeScalarWhereInput = {
    AND?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
    OR?: BlogLikeScalarWhereInput[]
    NOT?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
    id?: IntFilter<"BlogLike"> | number
    blogId?: IntFilter<"BlogLike"> | number
    userId?: StringFilter<"BlogLike"> | string
  }

  export type BlogPostUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutUserInput, BlogPostUncheckedUpdateWithoutUserInput>
    create: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutUserInput, BlogPostUncheckedUpdateWithoutUserInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutUserInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    id?: IntFilter<"BlogPost"> | number
    userId?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    tag?: StringNullableFilter<"BlogPost"> | string | null
    createAt?: DateTimeFilter<"BlogPost"> | Date | string
    updateAt?: DateTimeFilter<"BlogPost"> | Date | string
    aiSummary?: StringFilter<"BlogPost"> | string
    isPublic?: BoolFilter<"BlogPost"> | boolean
  }

  export type BookMarkUpsertWithWhereUniqueWithoutUserInput = {
    where: BookMarkWhereUniqueInput
    update: XOR<BookMarkUpdateWithoutUserInput, BookMarkUncheckedUpdateWithoutUserInput>
    create: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput>
  }

  export type BookMarkUpdateWithWhereUniqueWithoutUserInput = {
    where: BookMarkWhereUniqueInput
    data: XOR<BookMarkUpdateWithoutUserInput, BookMarkUncheckedUpdateWithoutUserInput>
  }

  export type BookMarkUpdateManyWithWhereWithoutUserInput = {
    where: BookMarkScalarWhereInput
    data: XOR<BookMarkUpdateManyMutationInput, BookMarkUncheckedUpdateManyWithoutUserInput>
  }

  export type BookMarkScalarWhereInput = {
    AND?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
    OR?: BookMarkScalarWhereInput[]
    NOT?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
    id?: IntFilter<"BookMark"> | number
    blogId?: IntFilter<"BookMark"> | number
    userId?: StringFilter<"BookMark"> | string
    createAt?: DateTimeFilter<"BookMark"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    blogId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createAt?: DateTimeFilter<"Comment"> | Date | string
    deleteAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type NotificationBoxUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationBoxWhereUniqueInput
    update: XOR<NotificationBoxUpdateWithoutUserInput, NotificationBoxUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationBoxCreateWithoutUserInput, NotificationBoxUncheckedCreateWithoutUserInput>
  }

  export type NotificationBoxUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationBoxWhereUniqueInput
    data: XOR<NotificationBoxUpdateWithoutUserInput, NotificationBoxUncheckedUpdateWithoutUserInput>
  }

  export type NotificationBoxUpdateManyWithWhereWithoutUserInput = {
    where: NotificationBoxScalarWhereInput
    data: XOR<NotificationBoxUpdateManyMutationInput, NotificationBoxUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationBoxScalarWhereInput = {
    AND?: NotificationBoxScalarWhereInput | NotificationBoxScalarWhereInput[]
    OR?: NotificationBoxScalarWhereInput[]
    NOT?: NotificationBoxScalarWhereInput | NotificationBoxScalarWhereInput[]
    id?: IntFilter<"NotificationBox"> | number
    userId?: StringFilter<"NotificationBox"> | string
    isRead?: BoolFilter<"NotificationBox"> | boolean
  }

  export type UserProviderUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProviderWhereUniqueInput
    update: XOR<UserProviderUpdateWithoutUserInput, UserProviderUncheckedUpdateWithoutUserInput>
    create: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput>
  }

  export type UserProviderUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProviderWhereUniqueInput
    data: XOR<UserProviderUpdateWithoutUserInput, UserProviderUncheckedUpdateWithoutUserInput>
  }

  export type UserProviderUpdateManyWithWhereWithoutUserInput = {
    where: UserProviderScalarWhereInput
    data: XOR<UserProviderUpdateManyMutationInput, UserProviderUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProviderScalarWhereInput = {
    AND?: UserProviderScalarWhereInput | UserProviderScalarWhereInput[]
    OR?: UserProviderScalarWhereInput[]
    NOT?: UserProviderScalarWhereInput | UserProviderScalarWhereInput[]
    id?: IntFilter<"UserProvider"> | number
    providerId?: IntFilter<"UserProvider"> | number
    userId?: StringFilter<"UserProvider"> | string
  }

  export type BlogLikeCreateWithoutBlogsInput = {
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type BlogLikeUncheckedCreateWithoutBlogsInput = {
    id?: number
    userId: string
  }

  export type BlogLikeCreateOrConnectWithoutBlogsInput = {
    where: BlogLikeWhereUniqueInput
    create: XOR<BlogLikeCreateWithoutBlogsInput, BlogLikeUncheckedCreateWithoutBlogsInput>
  }

  export type BlogLikeCreateManyBlogsInputEnvelope = {
    data: BlogLikeCreateManyBlogsInput | BlogLikeCreateManyBlogsInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBlogPostInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxCreateNestedManyWithoutUserInput
    userProvider?: UserProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogPostInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxUncheckedCreateNestedManyWithoutUserInput
    userProvider?: UserProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
  }

  export type BlogPostImageCreateWithoutBlogsInput = {
    image?: string | null
  }

  export type BlogPostImageUncheckedCreateWithoutBlogsInput = {
    id?: number
    image?: string | null
  }

  export type BlogPostImageCreateOrConnectWithoutBlogsInput = {
    where: BlogPostImageWhereUniqueInput
    create: XOR<BlogPostImageCreateWithoutBlogsInput, BlogPostImageUncheckedCreateWithoutBlogsInput>
  }

  export type BlogPostImageCreateManyBlogsInputEnvelope = {
    data: BlogPostImageCreateManyBlogsInput | BlogPostImageCreateManyBlogsInput[]
    skipDuplicates?: boolean
  }

  export type BookMarkCreateWithoutBlogsInput = {
    createAt?: Date | string
    user: UserCreateNestedOneWithoutBookMarkInput
  }

  export type BookMarkUncheckedCreateWithoutBlogsInput = {
    id?: number
    userId: string
    createAt?: Date | string
  }

  export type BookMarkCreateOrConnectWithoutBlogsInput = {
    where: BookMarkWhereUniqueInput
    create: XOR<BookMarkCreateWithoutBlogsInput, BookMarkUncheckedCreateWithoutBlogsInput>
  }

  export type BookMarkCreateManyBlogsInputEnvelope = {
    data: BookMarkCreateManyBlogsInput | BookMarkCreateManyBlogsInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutBlogsInput = {
    content: string
    createAt?: Date | string
    deleteAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutBlogsInput = {
    id?: number
    userId: string
    content: string
    createAt?: Date | string
    deleteAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutBlogsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutBlogsInput, CommentUncheckedCreateWithoutBlogsInput>
  }

  export type CommentCreateManyBlogsInputEnvelope = {
    data: CommentCreateManyBlogsInput | CommentCreateManyBlogsInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutBlogsInput = {
    type: string
    notification: NotificationBoxCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutBlogsInput = {
    id?: number
    notificationBoxId: number
    type: string
  }

  export type NotificationCreateOrConnectWithoutBlogsInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutBlogsInput, NotificationUncheckedCreateWithoutBlogsInput>
  }

  export type NotificationCreateManyBlogsInputEnvelope = {
    data: NotificationCreateManyBlogsInput | NotificationCreateManyBlogsInput[]
    skipDuplicates?: boolean
  }

  export type BlogLikeUpsertWithWhereUniqueWithoutBlogsInput = {
    where: BlogLikeWhereUniqueInput
    update: XOR<BlogLikeUpdateWithoutBlogsInput, BlogLikeUncheckedUpdateWithoutBlogsInput>
    create: XOR<BlogLikeCreateWithoutBlogsInput, BlogLikeUncheckedCreateWithoutBlogsInput>
  }

  export type BlogLikeUpdateWithWhereUniqueWithoutBlogsInput = {
    where: BlogLikeWhereUniqueInput
    data: XOR<BlogLikeUpdateWithoutBlogsInput, BlogLikeUncheckedUpdateWithoutBlogsInput>
  }

  export type BlogLikeUpdateManyWithWhereWithoutBlogsInput = {
    where: BlogLikeScalarWhereInput
    data: XOR<BlogLikeUpdateManyMutationInput, BlogLikeUncheckedUpdateManyWithoutBlogsInput>
  }

  export type UserUpsertWithoutBlogPostInput = {
    update: XOR<UserUpdateWithoutBlogPostInput, UserUncheckedUpdateWithoutBlogPostInput>
    create: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogPostInput, UserUncheckedUpdateWithoutBlogPostInput>
  }

  export type UserUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUncheckedUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogPostImageUpsertWithWhereUniqueWithoutBlogsInput = {
    where: BlogPostImageWhereUniqueInput
    update: XOR<BlogPostImageUpdateWithoutBlogsInput, BlogPostImageUncheckedUpdateWithoutBlogsInput>
    create: XOR<BlogPostImageCreateWithoutBlogsInput, BlogPostImageUncheckedCreateWithoutBlogsInput>
  }

  export type BlogPostImageUpdateWithWhereUniqueWithoutBlogsInput = {
    where: BlogPostImageWhereUniqueInput
    data: XOR<BlogPostImageUpdateWithoutBlogsInput, BlogPostImageUncheckedUpdateWithoutBlogsInput>
  }

  export type BlogPostImageUpdateManyWithWhereWithoutBlogsInput = {
    where: BlogPostImageScalarWhereInput
    data: XOR<BlogPostImageUpdateManyMutationInput, BlogPostImageUncheckedUpdateManyWithoutBlogsInput>
  }

  export type BlogPostImageScalarWhereInput = {
    AND?: BlogPostImageScalarWhereInput | BlogPostImageScalarWhereInput[]
    OR?: BlogPostImageScalarWhereInput[]
    NOT?: BlogPostImageScalarWhereInput | BlogPostImageScalarWhereInput[]
    id?: IntFilter<"BlogPostImage"> | number
    blogId?: IntFilter<"BlogPostImage"> | number
    image?: StringNullableFilter<"BlogPostImage"> | string | null
  }

  export type BookMarkUpsertWithWhereUniqueWithoutBlogsInput = {
    where: BookMarkWhereUniqueInput
    update: XOR<BookMarkUpdateWithoutBlogsInput, BookMarkUncheckedUpdateWithoutBlogsInput>
    create: XOR<BookMarkCreateWithoutBlogsInput, BookMarkUncheckedCreateWithoutBlogsInput>
  }

  export type BookMarkUpdateWithWhereUniqueWithoutBlogsInput = {
    where: BookMarkWhereUniqueInput
    data: XOR<BookMarkUpdateWithoutBlogsInput, BookMarkUncheckedUpdateWithoutBlogsInput>
  }

  export type BookMarkUpdateManyWithWhereWithoutBlogsInput = {
    where: BookMarkScalarWhereInput
    data: XOR<BookMarkUpdateManyMutationInput, BookMarkUncheckedUpdateManyWithoutBlogsInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutBlogsInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutBlogsInput, CommentUncheckedUpdateWithoutBlogsInput>
    create: XOR<CommentCreateWithoutBlogsInput, CommentUncheckedCreateWithoutBlogsInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutBlogsInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutBlogsInput, CommentUncheckedUpdateWithoutBlogsInput>
  }

  export type CommentUpdateManyWithWhereWithoutBlogsInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutBlogsInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutBlogsInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutBlogsInput, NotificationUncheckedUpdateWithoutBlogsInput>
    create: XOR<NotificationCreateWithoutBlogsInput, NotificationUncheckedCreateWithoutBlogsInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutBlogsInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutBlogsInput, NotificationUncheckedUpdateWithoutBlogsInput>
  }

  export type NotificationUpdateManyWithWhereWithoutBlogsInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutBlogsInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    blogId?: IntFilter<"Notification"> | number
    notificationBoxId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
  }

  export type NotificationCreateWithoutNotificationInput = {
    type: string
    blogs: BlogPostCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutNotificationInput = {
    id?: number
    blogId: number
    type: string
  }

  export type NotificationCreateOrConnectWithoutNotificationInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutNotificationInput, NotificationUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationCreateManyNotificationInputEnvelope = {
    data: NotificationCreateManyNotificationInput | NotificationCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutNotificationBoxInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeCreateNestedManyWithoutUserInput
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userProvider?: UserProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationBoxInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeUncheckedCreateNestedManyWithoutUserInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userProvider?: UserProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationBoxInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationBoxInput, UserUncheckedCreateWithoutNotificationBoxInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutNotificationInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutNotificationInput, NotificationUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationCreateWithoutNotificationInput, NotificationUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutNotificationInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutNotificationInput, NotificationUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationUpdateManyWithWhereWithoutNotificationInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationBoxInput = {
    update: XOR<UserUpdateWithoutNotificationBoxInput, UserUncheckedUpdateWithoutNotificationBoxInput>
    create: XOR<UserCreateWithoutNotificationBoxInput, UserUncheckedCreateWithoutNotificationBoxInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationBoxInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationBoxInput, UserUncheckedUpdateWithoutNotificationBoxInput>
  }

  export type UserUpdateWithoutNotificationBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUncheckedUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogPostCreateWithoutNotificationInput = {
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeCreateNestedManyWithoutBlogsInput
    user: UserCreateNestedOneWithoutBlogPostInput
    blogPostImages?: BlogPostImageCreateNestedManyWithoutBlogsInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogsInput
    comments?: CommentCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostUncheckedCreateWithoutNotificationInput = {
    id?: number
    userId: string
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeUncheckedCreateNestedManyWithoutBlogsInput
    blogPostImages?: BlogPostImageUncheckedCreateNestedManyWithoutBlogsInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogsInput
    comments?: CommentUncheckedCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostCreateOrConnectWithoutNotificationInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutNotificationInput, BlogPostUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationBoxCreateWithoutNotificationInput = {
    isRead?: boolean
    user: UserCreateNestedOneWithoutNotificationBoxInput
  }

  export type NotificationBoxUncheckedCreateWithoutNotificationInput = {
    id?: number
    userId: string
    isRead?: boolean
  }

  export type NotificationBoxCreateOrConnectWithoutNotificationInput = {
    where: NotificationBoxWhereUniqueInput
    create: XOR<NotificationBoxCreateWithoutNotificationInput, NotificationBoxUncheckedCreateWithoutNotificationInput>
  }

  export type BlogPostUpsertWithoutNotificationInput = {
    update: XOR<BlogPostUpdateWithoutNotificationInput, BlogPostUncheckedUpdateWithoutNotificationInput>
    create: XOR<BlogPostCreateWithoutNotificationInput, BlogPostUncheckedCreateWithoutNotificationInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutNotificationInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutNotificationInput, BlogPostUncheckedUpdateWithoutNotificationInput>
  }

  export type BlogPostUpdateWithoutNotificationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUpdateManyWithoutBlogsNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    blogPostImages?: BlogPostImageUpdateManyWithoutBlogsNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogsNestedInput
    comments?: CommentUpdateManyWithoutBlogsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUncheckedUpdateManyWithoutBlogsNestedInput
    blogPostImages?: BlogPostImageUncheckedUpdateManyWithoutBlogsNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBlogsNestedInput
  }

  export type NotificationBoxUpsertWithoutNotificationInput = {
    update: XOR<NotificationBoxUpdateWithoutNotificationInput, NotificationBoxUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationBoxCreateWithoutNotificationInput, NotificationBoxUncheckedCreateWithoutNotificationInput>
    where?: NotificationBoxWhereInput
  }

  export type NotificationBoxUpdateToOneWithWhereWithoutNotificationInput = {
    where?: NotificationBoxWhereInput
    data: XOR<NotificationBoxUpdateWithoutNotificationInput, NotificationBoxUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationBoxUpdateWithoutNotificationInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationBoxNestedInput
  }

  export type NotificationBoxUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlogPostCreateWithoutBookMarkInput = {
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeCreateNestedManyWithoutBlogsInput
    user: UserCreateNestedOneWithoutBlogPostInput
    blogPostImages?: BlogPostImageCreateNestedManyWithoutBlogsInput
    comments?: CommentCreateNestedManyWithoutBlogsInput
    notification?: NotificationCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostUncheckedCreateWithoutBookMarkInput = {
    id?: number
    userId: string
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeUncheckedCreateNestedManyWithoutBlogsInput
    blogPostImages?: BlogPostImageUncheckedCreateNestedManyWithoutBlogsInput
    comments?: CommentUncheckedCreateNestedManyWithoutBlogsInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostCreateOrConnectWithoutBookMarkInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutBookMarkInput, BlogPostUncheckedCreateWithoutBookMarkInput>
  }

  export type UserCreateWithoutBookMarkInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeCreateNestedManyWithoutUserInput
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxCreateNestedManyWithoutUserInput
    userProvider?: UserProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookMarkInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeUncheckedCreateNestedManyWithoutUserInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxUncheckedCreateNestedManyWithoutUserInput
    userProvider?: UserProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookMarkInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
  }

  export type BlogPostUpsertWithoutBookMarkInput = {
    update: XOR<BlogPostUpdateWithoutBookMarkInput, BlogPostUncheckedUpdateWithoutBookMarkInput>
    create: XOR<BlogPostCreateWithoutBookMarkInput, BlogPostUncheckedCreateWithoutBookMarkInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutBookMarkInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutBookMarkInput, BlogPostUncheckedUpdateWithoutBookMarkInput>
  }

  export type BlogPostUpdateWithoutBookMarkInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUpdateManyWithoutBlogsNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    blogPostImages?: BlogPostImageUpdateManyWithoutBlogsNestedInput
    comments?: CommentUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUpdateManyWithoutBlogsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutBookMarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUncheckedUpdateManyWithoutBlogsNestedInput
    blogPostImages?: BlogPostImageUncheckedUpdateManyWithoutBlogsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogsNestedInput
  }

  export type UserUpsertWithoutBookMarkInput = {
    update: XOR<UserUpdateWithoutBookMarkInput, UserUncheckedUpdateWithoutBookMarkInput>
    create: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookMarkInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookMarkInput, UserUncheckedUpdateWithoutBookMarkInput>
  }

  export type UserUpdateWithoutBookMarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookMarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUncheckedUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUncheckedUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogPostCreateWithoutLikesInput = {
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    user: UserCreateNestedOneWithoutBlogPostInput
    blogPostImages?: BlogPostImageCreateNestedManyWithoutBlogsInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogsInput
    comments?: CommentCreateNestedManyWithoutBlogsInput
    notification?: NotificationCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostUncheckedCreateWithoutLikesInput = {
    id?: number
    userId: string
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    blogPostImages?: BlogPostImageUncheckedCreateNestedManyWithoutBlogsInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogsInput
    comments?: CommentUncheckedCreateNestedManyWithoutBlogsInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostCreateOrConnectWithoutLikesInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutLikesInput, BlogPostUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxCreateNestedManyWithoutUserInput
    userProvider?: UserProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxUncheckedCreateNestedManyWithoutUserInput
    userProvider?: UserProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type BlogPostUpsertWithoutLikesInput = {
    update: XOR<BlogPostUpdateWithoutLikesInput, BlogPostUncheckedUpdateWithoutLikesInput>
    create: XOR<BlogPostCreateWithoutLikesInput, BlogPostUncheckedCreateWithoutLikesInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutLikesInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutLikesInput, BlogPostUncheckedUpdateWithoutLikesInput>
  }

  export type BlogPostUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    blogPostImages?: BlogPostImageUpdateManyWithoutBlogsNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogsNestedInput
    comments?: CommentUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUpdateManyWithoutBlogsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    blogPostImages?: BlogPostImageUncheckedUpdateManyWithoutBlogsNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogsNestedInput
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUncheckedUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogPostCreateWithoutCommentsInput = {
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeCreateNestedManyWithoutBlogsInput
    user: UserCreateNestedOneWithoutBlogPostInput
    blogPostImages?: BlogPostImageCreateNestedManyWithoutBlogsInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogsInput
    notification?: NotificationCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostUncheckedCreateWithoutCommentsInput = {
    id?: number
    userId: string
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeUncheckedCreateNestedManyWithoutBlogsInput
    blogPostImages?: BlogPostImageUncheckedCreateNestedManyWithoutBlogsInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogsInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostCreateOrConnectWithoutCommentsInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeCreateNestedManyWithoutUserInput
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxCreateNestedManyWithoutUserInput
    userProvider?: UserProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeUncheckedCreateNestedManyWithoutUserInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxUncheckedCreateNestedManyWithoutUserInput
    userProvider?: UserProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type BlogPostUpsertWithoutCommentsInput = {
    update: XOR<BlogPostUpdateWithoutCommentsInput, BlogPostUncheckedUpdateWithoutCommentsInput>
    create: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutCommentsInput, BlogPostUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogPostUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUpdateManyWithoutBlogsNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    blogPostImages?: BlogPostImageUpdateManyWithoutBlogsNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUpdateManyWithoutBlogsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUncheckedUpdateManyWithoutBlogsNestedInput
    blogPostImages?: BlogPostImageUncheckedUpdateManyWithoutBlogsNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogsNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUncheckedUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUncheckedUpdateManyWithoutUserNestedInput
    userProvider?: UserProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogPostCreateWithoutBlogPostImagesInput = {
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeCreateNestedManyWithoutBlogsInput
    user: UserCreateNestedOneWithoutBlogPostInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogsInput
    comments?: CommentCreateNestedManyWithoutBlogsInput
    notification?: NotificationCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostUncheckedCreateWithoutBlogPostImagesInput = {
    id?: number
    userId: string
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
    likes?: BlogLikeUncheckedCreateNestedManyWithoutBlogsInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogsInput
    comments?: CommentUncheckedCreateNestedManyWithoutBlogsInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogsInput
  }

  export type BlogPostCreateOrConnectWithoutBlogPostImagesInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutBlogPostImagesInput, BlogPostUncheckedCreateWithoutBlogPostImagesInput>
  }

  export type BlogPostUpsertWithoutBlogPostImagesInput = {
    update: XOR<BlogPostUpdateWithoutBlogPostImagesInput, BlogPostUncheckedUpdateWithoutBlogPostImagesInput>
    create: XOR<BlogPostCreateWithoutBlogPostImagesInput, BlogPostUncheckedCreateWithoutBlogPostImagesInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutBlogPostImagesInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutBlogPostImagesInput, BlogPostUncheckedUpdateWithoutBlogPostImagesInput>
  }

  export type BlogPostUpdateWithoutBlogPostImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUpdateManyWithoutBlogsNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogsNestedInput
    comments?: CommentUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUpdateManyWithoutBlogsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutBlogPostImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUncheckedUpdateManyWithoutBlogsNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogsNestedInput
  }

  export type UserProviderCreateWithoutProviderInput = {
    user: UserCreateNestedOneWithoutUserProviderInput
  }

  export type UserProviderUncheckedCreateWithoutProviderInput = {
    id?: number
    userId: string
  }

  export type UserProviderCreateOrConnectWithoutProviderInput = {
    where: UserProviderWhereUniqueInput
    create: XOR<UserProviderCreateWithoutProviderInput, UserProviderUncheckedCreateWithoutProviderInput>
  }

  export type UserProviderCreateManyProviderInputEnvelope = {
    data: UserProviderCreateManyProviderInput | UserProviderCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type UserProviderUpsertWithWhereUniqueWithoutProviderInput = {
    where: UserProviderWhereUniqueInput
    update: XOR<UserProviderUpdateWithoutProviderInput, UserProviderUncheckedUpdateWithoutProviderInput>
    create: XOR<UserProviderCreateWithoutProviderInput, UserProviderUncheckedCreateWithoutProviderInput>
  }

  export type UserProviderUpdateWithWhereUniqueWithoutProviderInput = {
    where: UserProviderWhereUniqueInput
    data: XOR<UserProviderUpdateWithoutProviderInput, UserProviderUncheckedUpdateWithoutProviderInput>
  }

  export type UserProviderUpdateManyWithWhereWithoutProviderInput = {
    where: UserProviderScalarWhereInput
    data: XOR<UserProviderUpdateManyMutationInput, UserProviderUncheckedUpdateManyWithoutProviderInput>
  }

  export type ProviderCreateWithoutUserProviderInput = {
    name: string
  }

  export type ProviderUncheckedCreateWithoutUserProviderInput = {
    id?: number
    name: string
  }

  export type ProviderCreateOrConnectWithoutUserProviderInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutUserProviderInput, ProviderUncheckedCreateWithoutUserProviderInput>
  }

  export type UserCreateWithoutUserProviderInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeCreateNestedManyWithoutUserInput
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserProviderInput = {
    id?: string
    nickname: string
    email: string
    profileImage?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    likes?: BlogLikeUncheckedCreateNestedManyWithoutUserInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notificationBox?: NotificationBoxUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserProviderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProviderInput, UserUncheckedCreateWithoutUserProviderInput>
  }

  export type ProviderUpsertWithoutUserProviderInput = {
    update: XOR<ProviderUpdateWithoutUserProviderInput, ProviderUncheckedUpdateWithoutUserProviderInput>
    create: XOR<ProviderCreateWithoutUserProviderInput, ProviderUncheckedCreateWithoutUserProviderInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutUserProviderInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutUserProviderInput, ProviderUncheckedUpdateWithoutUserProviderInput>
  }

  export type ProviderUpdateWithoutUserProviderInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderUncheckedUpdateWithoutUserProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutUserProviderInput = {
    update: XOR<UserUpdateWithoutUserProviderInput, UserUncheckedUpdateWithoutUserProviderInput>
    create: XOR<UserCreateWithoutUserProviderInput, UserUncheckedCreateWithoutUserProviderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProviderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProviderInput, UserUncheckedUpdateWithoutUserProviderInput>
  }

  export type UserUpdateWithoutUserProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: BlogLikeUncheckedUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notificationBox?: NotificationBoxUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogLikeCreateManyUserInput = {
    id?: number
    blogId: number
  }

  export type BlogPostCreateManyUserInput = {
    id?: number
    title: string
    content: string
    tag?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    aiSummary: string
    isPublic?: boolean
  }

  export type BookMarkCreateManyUserInput = {
    id?: number
    blogId: number
    createAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: number
    blogId: number
    content: string
    createAt?: Date | string
    deleteAt?: Date | string
  }

  export type NotificationBoxCreateManyUserInput = {
    id?: number
    isRead?: boolean
  }

  export type UserProviderCreateManyUserInput = {
    id?: number
    providerId: number
  }

  export type BlogLikeUpdateWithoutUserInput = {
    blogs?: BlogPostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type BlogLikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
  }

  export type BlogLikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
  }

  export type BlogPostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUpdateManyWithoutBlogsNestedInput
    blogPostImages?: BlogPostImageUpdateManyWithoutBlogsNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogsNestedInput
    comments?: CommentUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUpdateManyWithoutBlogsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likes?: BlogLikeUncheckedUpdateManyWithoutBlogsNestedInput
    blogPostImages?: BlogPostImageUncheckedUpdateManyWithoutBlogsNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBlogsNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogsNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSummary?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookMarkUpdateWithoutUserInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogPostUpdateOneRequiredWithoutBookMarkNestedInput
  }

  export type BookMarkUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookMarkUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogPostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationBoxUpdateWithoutUserInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
    notification?: NotificationUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationBoxUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    notification?: NotificationUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationBoxUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserProviderUpdateWithoutUserInput = {
    provider?: ProviderUpdateOneRequiredWithoutUserProviderNestedInput
  }

  export type UserProviderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProviderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
  }

  export type BlogLikeCreateManyBlogsInput = {
    id?: number
    userId: string
  }

  export type BlogPostImageCreateManyBlogsInput = {
    id?: number
    image?: string | null
  }

  export type BookMarkCreateManyBlogsInput = {
    id?: number
    userId: string
    createAt?: Date | string
  }

  export type CommentCreateManyBlogsInput = {
    id?: number
    userId: string
    content: string
    createAt?: Date | string
    deleteAt?: Date | string
  }

  export type NotificationCreateManyBlogsInput = {
    id?: number
    notificationBoxId: number
    type: string
  }

  export type BlogLikeUpdateWithoutBlogsInput = {
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type BlogLikeUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogLikeUncheckedUpdateManyWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostImageUpdateWithoutBlogsInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostImageUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostImageUncheckedUpdateManyWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookMarkUpdateWithoutBlogsInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookMarkNestedInput
  }

  export type BookMarkUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookMarkUncheckedUpdateManyWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutBlogsInput = {
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutBlogsInput = {
    type?: StringFieldUpdateOperationsInput | string
    notification?: NotificationBoxUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationBoxId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationBoxId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateManyNotificationInput = {
    id?: number
    blogId: number
    type: string
  }

  export type NotificationUpdateWithoutNotificationInput = {
    type?: StringFieldUpdateOperationsInput | string
    blogs?: BlogPostUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type UserProviderCreateManyProviderInput = {
    id?: number
    userId: string
  }

  export type UserProviderUpdateWithoutProviderInput = {
    user?: UserUpdateOneRequiredWithoutUserProviderNestedInput
  }

  export type UserProviderUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserProviderUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}