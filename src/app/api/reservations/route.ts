import { NextRequest, NextResponse } from 'next/server';

interface ReservationRequest {
  name: string;
  partySize: string;
  date: string;
  time: string;
  specialRequests?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ReservationRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.partySize || !body.date || !body.time) {
      return NextResponse.json(
        { error: 'Missing required fields: name, partySize, date, time' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    const webhookSecret = process.env.N8N_WEBHOOK_SECRET;

    if (!webhookUrl || !webhookSecret) {
      console.error('Missing n8n webhook configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Combine date and time into a datetime string
    const dateTime = `${body.date}T${body.time}:00`;

    // Call the n8n webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-OakBarrel-Secret': webhookSecret,
      },
      body: JSON.stringify({
        name: body.name,
        partySize: parseInt(body.partySize, 10),
        dateTime: dateTime,
        specialRequests: body.specialRequests || '',
      }),
    });

    if (!response.ok) {
      console.error('n8n webhook error:', response.status, await response.text());
      return NextResponse.json(
        { error: 'Failed to create reservation' },
        { status: 502 }
      );
    }

    const data = await response.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: 'Reservation created successfully',
      data,
    });
  } catch (error) {
    console.error('Reservation API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
