class Api::CommentsController < ApplicationController
  def create
    card = Card.find(params[:card_id])

    @comment = Comment.new(comment_params.merge({
      card: card
    }))

    if @comment.save
      render :create
    else
      @error = @comment.errors.full_messages.join(', ')
      render 'api/shared/error', status: 422
    end

  rescue ActiveRecord::RecordNotFound
    @error = "Card not found"
    render 'api/shared/error', status: 404
  end

  private

  def comment_params
    params.require(:comment).permit(:text)
  end
end
