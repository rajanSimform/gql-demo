-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Donation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "count" INTEGER NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "displayName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT,
    "messsage" TEXT,
    "team" TEXT
);
INSERT INTO "new_Donation" ("count", "createdAt", "displayName", "email", "id", "messsage", "mobile", "team") SELECT "count", "createdAt", "displayName", "email", "id", "messsage", "mobile", "team" FROM "Donation";
DROP TABLE "Donation";
ALTER TABLE "new_Donation" RENAME TO "Donation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
