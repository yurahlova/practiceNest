import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {
    return this.reviewService.create(dto);
  }

  @Get('/byProduct/:productId')
  async get(@Param('productId') productId: string) {
    return this.reviewService.findByProductId(productId);
  }

  @Delete('/byProduct/:productId')
  async deleteByProductId(@Param('productId') productId: string) {
    return this.reviewService.deleteByProductId(productId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const result = await this.reviewService.delete(id);

    if (!result) {
      throw new HttpException('Відгук не знайдено', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
