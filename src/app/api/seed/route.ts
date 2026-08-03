import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Application is running in pure static Next.js mode. No database seeding required."
  })
}
