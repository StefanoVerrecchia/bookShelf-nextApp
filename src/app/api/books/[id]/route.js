import mongoDbConnect from '../../../utils/mongoDb.js';
import Books from '../../../model/bookModel.js'
import { NextResponse } from 'next/server';

export async function GET(req , { params }) {
    console.log('GET by Id');
    console.log(params);
    try {

        const { id } = params;
        console.log(id);
        await mongoDbConnect();
        const data = await Books.findById(id);
        return NextResponse.json(data);

    }
    catch (error) {
        console.error('Error getting book:', error);
        return NextResponse.json({ error: 'Error getting book' }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    console.log('put');
    console.log(params);
    try {
        const { id } = params;
        console.log(id);
        await mongoDbConnect();
        const data = await req.json();
        await Books.findByIdAndUpdate(id, data);
        return NextResponse.json({ message: 'Book updated', data: data });
    } catch (error) {
        console.error('Error updating book:', error);
        return NextResponse.json({ error: 'Error updating book' }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    console.log('delete');
    try {
        const { id } = params;
        console.log(id);
        await mongoDbConnect();
        await Books.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Book deleted' });
    } catch (error) {
        console.error('Error updating book:', error);
        return NextResponse.json({ error: 'Error deleting book' }, { status: 500 });
    }
}