@extends('layout')

@section('content')
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6">
                        <h3>Skills List</h3>
                    </div>
                    <div class="col-md-6">
                        <a href="{{route('student.create')}}" class="btn btn-primary float-end">Back</a>
                        <a href="{{ route('skill.create') }}" class="btn btn-primary float-end">Add Skill</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Skill</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($skills as $skill)
                            <tr>
                                <td>{{ ++$i }}</td>
                                <td>{{ $skill->name }}</td>
                                <td>
                                    <form action="{{ route('skill.destroy', $skill->id) }}" method="POST">
                                        <a href="{{ route('skill.edit', $skill->id) }}" class="btn btn-warning">Edit</a>
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                        <div class="float-end">
                            {{ $skills->links() }}
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
