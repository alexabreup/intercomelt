declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"404.md": {
	id: "404.md";
  slug: "404";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Configurar a Interface de Comandos/botoes.md": {
	id: "Configurar a Interface de Comandos/botoes.md";
  slug: "configurar-a-interface-de-comandos/botoes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Configurar a Interface de Comandos/campos.md": {
	id: "Configurar a Interface de Comandos/campos.md";
  slug: "configurar-a-interface-de-comandos/campos";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Configurar a Interface de Comandos/comandos-configurar.md": {
	id: "Configurar a Interface de Comandos/comandos-configurar.md";
  slug: "configurar-a-interface-de-comandos/comandos-configurar";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Configurar a Interface de Comandos/instalar-windows.md": {
	id: "Configurar a Interface de Comandos/instalar-windows.md";
  slug: "configurar-a-interface-de-comandos/instalar-windows";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Configurar a Interface de Comandos/opainel.md": {
	id: "Configurar a Interface de Comandos/opainel.md";
  slug: "configurar-a-interface-de-comandos/opainel";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Referencias/links.md": {
	id: "Referencias/links.md";
  slug: "referencias/links";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Referencias/sobrenos.md": {
	id: "Referencias/sobrenos.md";
  slug: "referencias/sobrenos";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"guia/Atualização BOE Mubs/atualizar-placas.md": {
	id: "guia/Atualização BOE Mubs/atualizar-placas.md";
  slug: "guia/atualização-boe-mubs/atualizar-placas";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"guia/Atualização BOE Mubs/instalar-iot-windows.md": {
	id: "guia/Atualização BOE Mubs/instalar-iot-windows.md";
  slug: "guia/atualização-boe-mubs/instalar-iot-windows";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"guia/Atualização BOE Mubs/instalar-linux.md": {
	id: "guia/Atualização BOE Mubs/instalar-linux.md";
  slug: "guia/atualização-boe-mubs/instalar-linux";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"guia/O RTD Customer Tool/como-usar-o-rtd-customer-tool.md": {
	id: "guia/O RTD Customer Tool/como-usar-o-rtd-customer-tool.md";
  slug: "guia/o-rtd-customer-tool/como-usar-o-rtd-customer-tool";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"guia/O TCP Server Test/o-tcp-server.md": {
	id: "guia/O TCP Server Test/o-tcp-server.md";
  slug: "guia/o-tcp-server-test/o-tcp-server";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"guia/Os Modems/configurar-acesso.md": {
	id: "guia/Os Modems/configurar-acesso.md";
  slug: "guia/os-modems/configurar-acesso";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"guia/Os Modems/modem-claro.md": {
	id: "guia/Os Modems/modem-claro.md";
  slug: "guia/os-modems/modem-claro";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"guia/Os Modems/modem-vivo.md": {
	id: "guia/Os Modems/modem-vivo.md";
  slug: "guia/os-modems/modem-vivo";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"guia/Soluções de Problemas/problemas_com_adboard.md": {
	id: "guia/Soluções de Problemas/problemas_com_adboard.md";
  slug: "guia/soluções-de-problemas/problemas_com_adboard";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"guia/index.md": {
	id: "guia/index.md";
  slug: "guia";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
