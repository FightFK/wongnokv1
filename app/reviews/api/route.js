import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

export async function GET(request) {
    const promisePool = mysqlPool.promise();
    const [rows, fields] = await promisePool.query('SELECT * FROM review;');
   
    return NextResponse.json(rows)
  }