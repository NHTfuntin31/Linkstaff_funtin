<div class="modal" id="myModal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                @foreach ($skills as $skill)
                    <button type="button" value="{{ $skill->name }}" class="btn btn-info btn-skill">
                        {{ $skill->name }}
                    </button>
                @endforeach
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="btn-save-skill">Lưu lại</button>
            </div>
        </div>
    </div>
</div>
