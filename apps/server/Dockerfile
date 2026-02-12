FROM node:22-alpine AS builder
WORKDIR /app

# 1. העתקת קבצי ניהול חבילות ומבנה ה-Monorepo
COPY apps/server/package*.json ./apps/server/
RUN cd apps/server && npm install

# 2. העתקת קוד המקור (שרת ו-Shared)
COPY apps/server ./apps/server
COPY packages/shared ./packages/shared

# 3. בנייה מתוך תיקיית השרת
WORKDIR /app/apps/server
RUN npx prisma generate
RUN npm run build

# --- שלב ההרצה ---
FROM node:22-alpine
WORKDIR /app

# 4. העתקה של כל מה שנבנה לשורש /app
COPY --from=builder /app ./

EXPOSE 3000

# 5. הרצה: נכנסים לתיקייה של השרת כדי ש-Prisma ימצא את ה-Schema
# ואז מריצים את ה-dist מהנתיב המלא שלו
CMD cd apps/server && npx prisma migrate deploy && node dist/apps/server/src/index.js