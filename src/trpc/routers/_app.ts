import { createTRPCRouter } from '../init';

import { tagsRouter } from '@/modules/tags/server/procedures';
import { authRouter } from '@/modules/auth/server/procedures';
import { tenantsRouter } from '@/modules/tenants/server/procedures';
import { productsRouter } from '@/modules/products/server/procedures';
import { checkoutsRouter } from '@/modules/checkout/server/procedures';
import { categoriesRouter } from '@/modules/categories/server/procedures';

export const appRouter = createTRPCRouter({
  auth: authRouter,
  tags: tagsRouter,
  tenants: tenantsRouter,
  checkout: checkoutsRouter,
  products: productsRouter,
  categories: categoriesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
