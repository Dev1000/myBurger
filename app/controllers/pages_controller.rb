class PagesController < ApplicationController
  def index
    @index_props = { msg: 'Hello World LALO!' }
  end
end
