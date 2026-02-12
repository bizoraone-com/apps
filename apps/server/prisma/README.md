# Prisma – Local Development Guide

## 🔄 Updating the Database

### 1️⃣ Edit `schema.prisma`

### 2️⃣ Run Migration

```bash
npx prisma migrate dev --name change-description
```

**This will:**
- Create a migration
- Update the local database
- Regenerate Prisma Client

---

## 🔁 Regenerate Client (if needed)

```bash
npx prisma generate
```

---

## 🛠 If the Database Was Modified Manually

If someone changed the database directly (pgAdmin / SQL), run:

```bash
npx prisma db pull
npx prisma generate
```

> ⚠️ **Warning:** Manual database changes should be avoided. Prefer migrations.

---

## ✅ Rules

- Always update `schema.prisma`
- Do not modify the database manually
- Do not write SQL manually for regular changes
