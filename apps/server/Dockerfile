FROM node:22-alpine AS builder
WORKDIR /app

COPY apps/server/package*.json ./apps/server/
RUN cd apps/server && npm install

COPY apps/server ./apps/server
COPY packages/shared ./packages/shared

WORKDIR /app/apps/server
RUN npx prisma generate
RUN npm run build

FROM node:22-alpine
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD cd apps/server && npx prisma migrate deploy && node dist/apps/server/src/index.js