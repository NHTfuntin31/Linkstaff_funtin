<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Smalot\PdfParser\Parser;
use App\Models\Nepia;
use Geocoder\GeocoderFactory;

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
        //$fileName = $file->getClientOriginalName();
        $pdfParser = new Parser();
        $pdf = $pdfParser->parseFile($file->path());

        $content = $pdf->getText();
        $content = str_replace("\t", "", $content);
        $encodedContent = mb_convert_encoding($content, 'UTF-8');

        $lines = explode("\n", $encodedContent);

        foreach ($lines as $line) {
            if (strpos($line, '氏  名') !== false) {
                $name = trim(str_replace('氏  名', '', $line)); // Nhặt giá trị sau từ "Name"

            }

            $pattern = '/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/';
                if (preg_match($pattern, $line, $matches)) {
                    $email = $matches[0];
                }

            $pattern = '/市|区|府/u';
            if (preg_match($pattern, $line)) {
                $address = trim($line);
            }

        }

        

        $textPath = storage_path('\text.txt');
        file_put_contents($textPath, $encodedContent);
        // $upload_file = new Nepia;
        // $upload_file->colum1 = $fileName;
        // $upload_file->colum2 = $file->getMimeType();
        // $upload_file->colum3 = $file->getSize();
        // $upload_file->colum4 = $content;
        // $upload_file->save();

        return view('fuck',compact('lines','name','email','address'));
    }
}
