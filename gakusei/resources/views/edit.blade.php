@extends('layout')

@section('content')
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6">
                        <h3>修正</h3>
                    </div>
                    <div class="col-md-6">
                        <a href="{{ route('user.index') }}" class="btn btn-primary float-end">学生リスト</a>
                    </div>
                </div>
            </div>
            <div class="card-body">

                <!-- them cai nay vao -->
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
                <!---->

                <form action="{{ route('user.update',$user->id) }}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="row">
                        <div class="col-md-6">

                            <div class="form-group">
                                <strong>学生番号</strong>
                                <input type="text" name="Number" value="{{ $user->Number }}" class="form-control" placeholder="number">

                            </div>
                            <div class="form-group">
                                <strong>氏名</strong>
                                <input type="text" name="Name" value="{{ $user->Name }}" class="form-control" placeholder="name">
                            </div>
                            <div class="form-group">
                                <strong>生年月日</strong>
                                <input type="date" name="DateOfBirth" value="{{ $user->DateOfBirth }}" class="form-control">
                            </div>


                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <strong>住所</strong>
                                <input type="text" name="Address" value="{{ $user->Address }}" class="form-control" placeholder="address">
                            </div>
                            <div class="form-group">
                                <strong>電話番号</strong>
                                <input type="text" name="PhoneNB" value="{{ $user->PhoneNB }}" class="form-control" placeholder="phone number">
                            </div>
                            <div class="form-group">
                                <strong>Email</strong>
                                <input type="text" name="email" value="{{ $user->email }}" class="form-control" placeholder="email">
                            </div>
                        </div>
                    </div>
                    <button type="submit" onclick="return confirm('アップデートしますか?');" class="btn btn-success mt-2">アップデート</button>
                </form>
            </div>
        </div>
    </div>
    
@endsection