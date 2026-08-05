import Link from "next/link";

interface ProductBreadcrumbProps {
  name: string;
}

export function ProductBreadcrumb({ name }: ProductBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-body">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link href="/shop" className="transition-colors hover:text-primary">
            Shop
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-ink">
          {name}
        </li>
      </ol>
    </nav>
  );
}
