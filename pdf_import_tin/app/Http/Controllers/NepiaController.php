<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Smalot\PdfParser\Parser;
use App\Models\Nepia;

class NepiaController extends Controller
{
    public function showUploadForm()
    {
        return view('test');
    }

    public function store(Request $request)
    {
        
        $file = $request->file;

        $request->validate([
            'file' => 'required|mimes:pdf',
        ]);

        // use of pdf parser to read content from pdf 
        $fileName = $file->getClientOriginalName();
        $pdfParser = new Parser();
        $pdf = $pdfParser->parseFile($file->path());
        $content = $pdf->getText();
       // $content = preg_replace('/\h+/', ' ', $content);
        $encodedContent = mb_convert_encoding($content, 'UTF-8');

        

        $textPath = storage_path('\text.txt');
        file_put_contents($textPath, $encodedContent);
        // $upload_file = new Nepia;
        // $upload_file->colum1 = $fileName;
        // $upload_file->colum2 = $file->getMimeType();
        // $upload_file->colum3 = $file->getSize();
        // $upload_file->colum4 = $content;
        // $upload_file->save();

        return redirect()->back();
    }
}
