-- CreateTable
CREATE TABLE "UserEntity" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profile_img" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserEntity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserEntity_email_key" ON "UserEntity"("email");
