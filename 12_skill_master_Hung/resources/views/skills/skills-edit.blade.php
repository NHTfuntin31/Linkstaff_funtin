@extends('layout')

@section('content')
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="col-md-6">
                    <h3>Edit Skill</h3>
                </div>
            </div>
            <div class="card-body">
                <form action="{{route('Skill.update', $skill->id)}}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <strong>Skill Name</strong>
                        <input type="text" name="name" value="{{$skill->name}}" class="form-control" autocomplete="off">
                        @error('name')
                        <span style="color: red; font-size: 20px;">{{$message}}</span>
                        @enderror
                    </div><br>
                    <a href="{{route('Skill.index')}}" class="btn btn-secondary">キャンセル</a>
                    <button type="submit" class="btn btn-success">更新</button>
                </form>
            </div>
        </div>
    </div>
@endsection
