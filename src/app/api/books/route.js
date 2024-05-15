import mongoDbConnect from '../../utils/mongoDb.js';
import Books from '../../model/bookModel.js'
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    console.log('GET');
    try {
        await mongoDbConnect();
        const result = await Books.find();
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error gettings books:', error);
        return NextResponse.json({ error: 'Error gettings books' }, { status: 500 });

    }
}

export async function POST(req, res) {
    console.log('POST');
    try {
        await mongoDbConnect();
        const data = await req.json();
        console.log(data);
        await Books.create(data);
        return NextResponse.json({ message: 'Book created', data: data });
    } catch (error) {
        console.error('Error creating book:', error);
        return NextResponse.json({ error: 'Error creating book' }, { status: 500 });
    }
}

