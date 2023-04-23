<!-- index de tao cac chuc nang them sua xoa -->

@extends('layout')

@section('content')
<div class="container">
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>学生管理</h3>
                </div>
                <div class="col-md-6">
                    <!-- lay tu muc web.php -->
                    <a href="{{ route('user.create') }}" class="btn btn-primary float-end">追加</a>
                </div>
            </div>
        </div>
        <!-- duoi head la body -->
        <div class="card-body">
            @if (Session::has('thongbao'))
            <div class="alert alert-success">
                {{ Session::get('thongbao') }}
            </div>
            @endif
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>＃</th>
                        <th>学生番号</th>
                        <th>氏名</th>
                        <th>生年月日</th>
                        <th>住所</th>
                        <th>電話番号</th>
                        <th>email</th>
                        <th>修正</th>

                    </tr>
                </thead>
                <tbody>
                    <!-- lay tu sv controller -->
                    @foreach ($user as $sv)
                        <tr>
                            <td>{{ ++$i }}</td>
                            <td>{{ $sv->Number }}</td>
                            <td>{{ $sv->Name }}</td>
                            <td>{{ $sv->DateOfBirth }}</td>
                            <td>{{ $sv->Address }}</td>
                            <td>{{ $sv->PhoneNB }}</td>
                            <td>{{ $sv->email }}</td>
                            <td>
                                <form action="{{ route('user.destroy',$sv->id) }}" method="POST">
                                    <a href="{{ route('user.edit', $sv ->id ) }}" class="btn btn-info">修正</a>
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" onclick="return confirm('削除しますか?');" class="btn btn-danger">削除</button>
                                </form>
                            </td>

                        </tr>
                    @endforeach
                    <!-- Hiển thị danh sách người dùng -->
                    {{-- @foreach ($people as $person)
                        <div>{{ $person->name }}</div>
                    @endforeach --}}

                    <!-- Hiển thị phân trang -->
                   
                </tbody>

                
            </table>
            {{ $user->links('vendor.pagination.pagination') }}
        </div>
    </div>
</div>
@endsection