class ArtistsController < ApplicationController
    def index
        @artists = Artist.all
    end
    def show
        @artist = Artist.find(params[:id])
    end
    def new
        @artist = Artist.new
    end
    def create
        @artist = Artist.create(artists_params)
        redirect_to @artist, notice: 'Artist was successfully created'
    end
    def edit
        @artist = Artist.find(params[:id])
    end
    def update
        @artist = Artist.find(params[:id])
        @artist.update(artists_params)
        redirect_to @artist, notice: 'Artist was successfully updated'
    end
    def destroy
        @artist = Artist.find(params[:id])
        @artist.destroy
        redirect_to artist_path(@artist), notice: 'Artist was successfully destroyed'
    end
    private
    def artists_params
        params.require(:artist).permit(:name, :age, :experience_level)
    end
end

