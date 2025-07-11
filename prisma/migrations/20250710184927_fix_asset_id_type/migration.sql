-- CreateTable
CREATE TABLE "Asset" (
    "Asset_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "owner" TEXT NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "assetUrl" TEXT,
    "type" TEXT NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("Asset_id")
);
