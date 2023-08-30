// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import puppeteer from "puppeteer";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const requestUrl: any = req.url

    const url = requestUrl.replace('/api/screenshot/', '/')

    const thisDomain = process.env.VERCEL_URL || 'http://localhost:3000'

    // screenshot the url and return the image using puppeteer
    const width = 1024
    const height = 1024

    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: "new",
    });

    const page = await browser.newPage();

    await page.setViewport({ width, height });

    await page.goto(thisDomain + url)

    await page.waitForNetworkIdle();

    const screenshot = await page.screenshot({
        type: "png",
        fullPage: true,
    });

    await browser.close();

    res.statusCode = 200

    res.setHeader('Content-Type', 'image/png')

    res.end(screenshot)

    return;
}
