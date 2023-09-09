-- CreateTable
CREATE TABLE "TimeData" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "integerValue" INTEGER NOT NULL,

    CONSTRAINT "TimeData_pkey" PRIMARY KEY ("id")
);
