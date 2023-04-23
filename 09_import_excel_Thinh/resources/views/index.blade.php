<!DOCTYPE html>							
    <html>							
        <head>							
        <title>Laravel 9 Import Export Excel & CSV File to Database Example - LaravelTuts.com</title>							
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">							
        </head>							
        <body>							
                                    
            <div class="container">							
                <div class="card mt-3 mb-3">							
                    <div class="card-header text-center">							
                        <h4>リンクスタッフ人材管理アプリ</h4>						
                    </div>
                    @if (session('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @endif

                    <div class="col-md-12">
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    </div>
                    <div class="card-body">							
                        <form action="{{ route('students.import') }}" method="POST" enctype="multipart/form-data">							
                            @csrf							
                            <input type="file" name="file" class="form-control">							
                            <br>							
                            <button class="btn btn-primary">インポートする</button>							
                        </form>	
                        

                                    
                        <table class="table table-bordered mt-3">							
                            <tr>							
                                <th colspan="5">				
                                    リスト							
                                    <a class="btn btn-danger float-end" href="{{ route('students.export') }}">エクスポート</a>						
                                </th>							
                            </tr>							
                            <tr>							
                                <th>ID</th>							
                                <th>氏名</th>							
                                <th>Email</th>
                                <th>電話番号</th>
                                <th>Action</th>						
                            </tr>							
                            @foreach($students as $student)							
                                <tr>							
                                    <td>{{ $student->id }}</td>							
                                    <td>{{ $student->name }}</td>							
                                    <td>{{ $student->email }}</td>
                                    <td>{{ $student->phone }}</td>
                                    <td>
                                <form action="" method="POST">
                                    <a class="btn btn-info">Show</a>
                                    <a class="btn btn-info">修正</a>
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" onclick="return confirm('削除しますか?');" class="btn btn-danger">削除</button>
                                </form>
                            </td>				
                                </tr>							
                            @endforeach							
                        </table>
                        {{ $students->links('pagination::bootstrap-4') }}						
                                                    
                    </div>							
                </div>							
            </div>							
                                    
        </body>							
    </html>							